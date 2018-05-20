fetch( "http://localhost:4000/graphql?query=%7Bhello%7D", {
    method : 'get',
    body   : JSON.stringify( {
        graphql : "{hello)}"
    } )
} )