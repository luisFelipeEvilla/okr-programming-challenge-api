import { StreetAddress } from "./adress.entity";
import { EmailAddress } from "./email-address";
import { PhoneNumber } from "./phone-number.entity";

export class Contact {
  contact_id: string;
  email_address?: EmailAddress;
  first_name: string;
  last_name: string;
  create_source: string;
  phone_numbers?: PhoneNumber[];
  street_addresses?: StreetAddress[];

  created_at: string;
  updated_at: string;
}
