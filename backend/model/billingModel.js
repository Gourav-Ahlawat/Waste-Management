import { Schema, model } from 'mongoose';

const billingSchema = new Schema(
    {
        client_name: { type: String, required: true },
        client_address: { type: String, required: true },
        client_id: { type: String, required: true, unique: true },
        total_weight: { type: Number, required: true, default: 0 }
    });

const BillingModel = model('ClientBilling', billingSchema);

export default BillingModel;