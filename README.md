# askApikoApi

## Start
Add to folder /config: `config.dev.js` and `config.prod.js` files.

Example `config/config.dev.js`
```
 module.exports = {
	MONGODB_URI: 'mongodb://user:pass@localhost:2701/ask-apiko',
};

```

and then:
```
npm i && npm run dev

```

## API docs

#### Questions
[GET] `/api/v1/questions` :: List questions
```
    @optionalQueryParameters
      search {String} - value to search
      limit {Number} - count of item to send
      skip {Number} - value to search
      
    @response
        JSON :: {
            questions: Array
            count: Number
        }
```

[GET] `/api/v1/questions/:_id` :: Single questions
```
    @response
        JSON :: {
            question: Object
        }
```

[POST] `/api/v1/questions/` :: Single questions
```
    @param
     title (require) - {string}
     description (require) - {string}
     tags - [string]
     
    @response
        JSON :: {
            question: Object
        }
```

[PATCH] `/api/v1/questions/:_id` :: Single questions
```
    @param
     title (require) - {string}
     description (require) - {string}
     tags - [string]
     
    @response
        JSON :: {
            question: Object
        }
```

[DELETE] `/api/v1/questions/:_id` :: Single questions
