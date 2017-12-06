import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Cars = new Mongo.Collection('cars');

const PassengerSchema = new SimpleSchema({
    body:{
        label:'Body Type',
        type: String,
        allowedValues:['Sedan','HatchBack']
    }
});

const SportSchema = new SimpleSchema({
    drive:{
        label:'Drive mode',
        type: String,
        allowedValues:['4x4','4x2', 'racing','climbing']
    }
});

const SuperSchema = new SimpleSchema({
    topSpeed:{
        label:'Top Speed',
        type: Number,
        allowedValues:[250,300,400]
    }
});

const CarSchema = new SimpleSchema({
    name: {
        label: 'Name',
        type: String
    },
    company: {
        label: 'Manufacturer',
        type: String,
    },
    typeof:{
        type: String,
        allowedValues: ["passenger","sport","super"],
        defaultValue:"passenger",
    },
    passengerCar:{
        type: PassengerSchema,
        optional:true,
    },
    sportsCar:{
        type: SportSchema,
        optional:true,
    },
    superCar:{
        type: SuperSchema,
        optional:true,
    },
});


Cars.attachSchema(CarSchema);

export default {
    CarSchema,
    PassengerSchema,
    SportSchema,
    SuperSchema
}
