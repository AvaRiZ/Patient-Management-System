import { ObjectId } from 'mongodb';

export interface Patient {
    _id?: ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    dateOfBirth?: Date;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zipCode?: string;
    };
    medicalHistory?: Array<{
        condition: string;
        diagnosedDate: Date;
        status: string;
    }>;
    appointments?: ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

export const PatientSchema = {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["firstName", "lastName", "email", "createdAt"],
            properties: {
                firstName: { bsonType: "string" },
                lastName: { bsonType: "string" },
                email: { bsonType: "string" },
                phone: { bsonType: "string" },
                dateOfBirth: { bsonType: "date" },
                createdAt: { bsonType: "date" },
                updatedAt: { bsonType: "date" }
            }
        }
    }
};