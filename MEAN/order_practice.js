function orderSupplies(item, callback) {
  var warehouse; //undefined
  var deliveryTime = Math.random() * 3000;

  setTimeout(function(){
    warehouse = {
      paint: {
        product: 'Neon Green Paint',
        directions: function() { return 'mix it!' }
      },
      brush: {
        product: 'Horsehair brush',
        directions: function() { return 'start painting!' }
      }
    };

    callback(warehouse[item]);
  }, deliveryTime);
}

function receivedItem(item) {
  console.log('I received ' + item.product + ', now it is time to ' + item.directions());
}

orderSupplies('paint', receivedItem);
orderSupplies('brush', receivedItem);
