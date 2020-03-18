window.onload = function() {

   let items = {
        "object": "list",
        "data": [
          {
            "id": "sku_GvJqeOLL4Y6rhE",
            "object": "sku",
            "active": true,
            "attributes": {
              "name": "A Bigger Gizmo"
            },
            "created": 1584404545,
            "currency": "usd",
            "image": "https://files.stripe.com/links/fl_test_8iDRA5zQjSKGHP9oAWzS0q2k",
            "inventory": {
              "quantity": null,
              "type": "infinite",
              "value": null
            },
            "livemode": false,
            "metadata": {
            },
            "package_dimensions": null,
            "price": 999999,
            "product": "prod_GvJqwMV4XCYcxb",
            "updated": 1584404545
          },
          {
            "id": "sku_GvIoXoFzCTK2cx",
            "object": "sku",
            "active": true,
            "attributes": {
              "name": "A Little Gizmo"
            },
            "created": 1584400711,
            "currency": "usd",
            "image": null,
            "inventory": {
              "quantity": null,
              "type": "infinite",
              "value": null
            },
            "livemode": false,
            "metadata": {
            },
            "package_dimensions": null,
            "price": 999,
            "product": "prod_GvIo5HpEs7TURb",
            "updated": 1584400711
          }
        ],
        "has_more": false,
        "url": "/v1/skus"
    }




    // Your code, and code from Stripe's walkthrough goes here.
    console.log("this is happening")
    
    var stripe = Stripe('pk_test_kZ47tLMsFrFbgKx0QHotcSy4');

    var button1 = document.getElementById("purchase_gizmo");
    var button2 = document.getElementById("purchase_tesla");

    button1.addEventListener('click', function() {
        stripe.redirectToCheckout({
            items: [
            // Replace with the ID of your SKU
            {sku: 'sku_GvIoXoFzCTK2cx', quantity: 1}
            ],
            successUrl: 'http://localhost:8000/success.html',
            cancelUrl: 'http://localhost:8000/cancel.html',
        }).then(function (result) {
            // If redirectToCheckout fails due to a browser or network
            // error, display the localized error message to your customer
            // using result.error.message.
            console.log(result.error.message) // ADD THIS LINE!
        });
    })

        button2.addEventListener('click', function() {
            stripe.redirectToCheckout({
                items: [
                // Replace with the ID of your SKU
                {sku: 'sku_GvJqeOLL4Y6rhE', quantity: 1}
                ],
                successUrl: 'http://localhost:8000/success.html',
                cancelUrl: 'http://localhost:8000/cancel.html',
            }).then(function (result) {
                // If redirectToCheckout fails due to a browser or network
                // error, display the localized error message to your customer
                // using result.error.message.
                console.log(result.error.message) // ADD THIS LINE!
            });

        
    
    })

    }