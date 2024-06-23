import { Schema, model } from 'mongoose';

const clientSchema = new Schema(
    {
        client_name: { type: String, required: true },
        client_address: { type: String, required: true },
        client_id: { type: String, required: true },
        timestamp: { type: Date, required: true},
        weight: { type: Number, required: true },
        status: { type: String, required: true }
    });

const ClientModel = model('ClientRequests', clientSchema);

export default ClientModel;