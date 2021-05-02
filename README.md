# GraphQL
GraphQL is a web API technology that has been rapidly rising in popularity over the past few years. It was open-sourced by Facebook in 2015, though it has been used on the website since 2012. Unlike the traditional REST API, GraphQL enables much greater flexibility when making http requests.

### REST API v. GraphQL
In a REST API, things are pretty clear cut. You provide your http request to a certain server route and you receive a response that is typically in JSON format, like the request and corresponding response below:

```javascript
axios.get("http://localhost:3000/characters/1").then(res => res.data);
```

```javascript
{
    "id": "1",
    "name": "Daffy Duck",
    "email": "daffy@disney.com",
    "age": 82
}
```

The shape of these responses are pre-defined, and it is often the case that we don't need all the fields given. With larger applications, we may even need to make multiple requests to access deeper layers of data and waste large amounts of network bandwidth in the process. GraphQL allows us to circumvent these issues by allowing the exact specification of our response shape and even traversal of multiple layers of data in a single response. Below is an example of such a query using GraphQL.

```javascript
{
    characters(id:"1"){
        name,
        age,
        movies(limit: 2) {
            name
        }
    }
}
```

```javascript
{
    {
        "name": "Daffy Duck",
        "age": 82,
        "movies": [
            {
                "name": "Looney Tunes: Back in Action"
            },
            {
                "name": "Space Jam"
            }
        ]
    }
}
```

# PokeQuery
Built with GraphQL and the PokeAPI. <br/><br/>
<kbd><img align="left" width="500" src="https://i.ibb.co/89LRmWh/poke-01.png" alt="#" border="0"></kbd><br/><br/>
<kbd><img align="left" width="500" src="https://i.ibb.co/hyfLX9N/poke-02.png" alt="#" border="0"></kbd><br/><br/>
<kbd><img align="left" width="500" src="https://i.ibb.co/WkS4xJY/poke-03.png" alt="#" border="0"></kbd><br/><br/>
<kbd><img align="left" width="500" src="https://i.ibb.co/Cb8qYnx/poke-04.png" alt="#" border="0"></kbd><br/><br/>
<kbd><img align="left" width="500" src="https://i.ibb.co/kX71Jz3/poke-05.png" alt="#" border="0"></kbd><br/><br/>






