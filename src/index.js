var products = []

function addRow()
{
    
    var id = document.getElementById('p_id').value;
     var name = document.getElementById('p_name').value;
      var price = document.getElementById('p_price').value;
    
      var eachProduct = {};
      eachProduct.id = id;
      eachProduct.name = name;
      eachProduct.price = price;

    if(isExist(id) == false)
    {
        products.push(eachProduct);
    }

    //  products.push(eachProduct);
      display();
      console.log("products",products);
      
}

function display() {
    var html = '';
    html += '<table><tr><th>ID</th><th>NAME</th><th>PRICE</th></tr>';
    for(i =0 ; i < products.length ; i++)
    {
        html += '<tr><td>'+products[i].id+'</td><td>'+products[i].name+'</td><td>'+products[i].price+'</td></tr>';

    }
    html += '</table';
    document.getElementById('result').innerHTML = html;
}

function isExist(id) {
    for(i =0 ; i < products.length ; i++)
    {
        if(products[i].id == id)
        {
            return true;
        }
    }

    return false;
}