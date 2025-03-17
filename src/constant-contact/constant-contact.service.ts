import { HttpException, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateContactDto } from 'src/contact/dto/create-contact.dto';
import { ContactDto, GetContactsDto } from 'src/contact/dto/get-contacts.dto';

@Injectable()
export class ConstantContactService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL:
        process.env.CONSTANT_CONTACT_API_URL || 'https://api.cc.email/v3/',
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
}
