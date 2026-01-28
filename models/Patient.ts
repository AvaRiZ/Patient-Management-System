import mongoose, { Schema, model, models } from 'mongoose';

const PatientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  medicalHistory: [{
    condition: String,
    diagnosedDate: Date,
    notes: String
  }],
  insurance: {
    provider: String,
    policyNumber: String,
  },
  active: { type: Boolean, default: true }
}, { timestamps: true });

export const Patient = models.Patient || model('Patient', PatientSchema);