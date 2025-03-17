import { HttpException, Injectable } from '@nestjs/common';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { CreateContactDto } from 'src/contact/dto/create-contact.dto';
import { ContactDto, GetContactsDto } from 'src/contact/dto/get-contacts.dto';
import { Task } from 'src/task/entities/task.entity';

@Injectable()
export class ConstantContactService {
  private client: AxiosInstance;
  private readonly baseUrl = 'https://api.cc.email/v3';

  constructor() {
    this.client = axios.create({
      baseURL: this.baseUrl,
    });
  }

  async getContacts({
    token,
    cursor,
    limit,
  }: {
    token: string;
    cursor?: string;
    limit?: string;
  }): Promise<GetContactsDto> {
    try {
      const searchParams = new URLSearchParams();
      if (limit) searchParams.set('limit', limit);
      if (cursor) searchParams.set('cursor', cursor);
      searchParams.set('include', 'phone_numbers,street_addresses');
      searchParams.set('include_count', 'true');

      const response = await this.client.get(
        `/contacts?${searchParams.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async getContact(contactId: string, token: string): Promise<ContactDto> {
    const searchParams = new URLSearchParams();
    searchParams.set('include', 'phone_numbers,street_addresses');

    try {
      const response = await this.client.get(
        `/contacts/${contactId}?${searchParams.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async createContact(contact: CreateContactDto, token: string) {
    try {
      const response = await this.client.post('/contacts', contact, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async removeContact(contactId: string, token: string) {
    try {
      const response = await this.client.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async exportContacts(token: string): Promise<Task> {
    try {
      const response = await fetch(`${this.baseUrl}/activities/contact_exports`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
      }); 

      if (response.ok) {
        return response.json();
      } else {
        throw new HttpException(response.statusText, response.status);
      }
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async getTasks(token: string): Promise<{
    activities: Task[];
  }> {
    const response = await this.client.get("/activities", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }

  async downloadTaskResults(url: string, token: string): Promise<Blob> {
    console.log(" to download task results ", url);
    const response = await this.client.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  async getTask(id: string, token: string): Promise<Blob> {
    const response = await this.client.get(`/activities/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });


    const downloadUrl = response.data._links.results.href.split("v3").pop();

    if (!downloadUrl) {
      throw new HttpException("Download URL not found", 400);
    }

    const blob = await this.downloadTaskResults(downloadUrl, token);

    return blob;
  }
}
