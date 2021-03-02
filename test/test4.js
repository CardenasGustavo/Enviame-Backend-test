const Request = require("request");

var uri = 'https://stage.api.enviame.io/api/s2/v2/companies/401/deliveries';
var token = 'ea670047974b650bbcba5dd759baf1ed';

var delivery = {
    shipping_order: {
        n_packages: '1',
        content_description: "ORDEN 255826267",
        imported_id: "255826267",
        order_price: "24509.0",
        weight: "0.98",
        volume: "1.0",
        type: "delivery"
    },

    shipping_origin: {
        warehouse_code: "401"
    },

    shipping_destination: {
        customer: {
            name: "Bernardita Tapia Riquelme",
            email: "b.tapia@outlook.com",
            phone: "977623070"
        },

        delivery_address: {
            home_address: {
                place: "Puente Alto",
                full_address: "SAN HUGO 01324, Puente Alto, Puente Alto"
            }
        }
    },

    carrier: {
        carrier_code: "BLX",
        tracking_number: "134654"
    }
}

const opt = {
    url: uri,
    headers: {
        'Content-Type': 'application/json',
        "api-key": token
    },
    json: true,
    body: delivery
};

Request.post(opt, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(body);
});