
# 🔻 API Documentation

This section provides code samples, example requests and responses for the hepic API

## Base URLs

* <a href="https://api.hepic/api/v3">https://api.hepic/api/v3</a>
* <a href="http://api.hepic/api/v3">http://api.hepic/api/v3</a>

## Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **Auth-Token**, in: header. 

* API Key (JWT)
    - Parameter Name: **Authorization**, in: header. 

## Admin API

### ListProfiles

<a id="opIdListProfiles"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/admin/profiles', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/admin/profiles',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /admin/profiles`

Returns data from server

> Example responses

> 201 Response

```json
{
  "create_date": "2020-10-20T21:15:45+02:00",
  "guid": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "hep_alias": "SIP",
  "hepid": 1,
  "mapping": {},
  "profile": "call",
  "version": 1603221345489
}
```

<h3 id="listprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|HepsubSchema|[HepsubSchema](#schemahepsubschema)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### tablesList

<a id="opIdtablesList"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/configdb/tables/list', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/configdb/tables/list',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /configdb/tables/list`

Returns the list of tables

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    "alias",
    "users",
    "global_settings"
  ]
}
```

<h3 id="tableslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AdminTables|[AdminTables](#schemaadmintables)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### tablesResync

<a id="opIdtablesResync"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/configdb/tables/resync', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/configdb/tables/resync',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /configdb/tables/resync`

Returns the list of tables

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="tablesresync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-advanced">Advanced</h1>

### ListAdvancedSettings

<a id="opIdListAdvancedSettings"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/advanced', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/advanced',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /advanced`

Returns advanced setting of user

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "category": "string",
      "create_date": "2019-08-24T14:15:22Z",
      "data": {},
      "guid": "string",
      "param": "string",
      "partid": 0,
      "setting": {},
      "version": 0
    }
  ]
}
```

<h3 id="listadvancedsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|GlobalSettingsStructList|[GlobalSettingsStructList](#schemaglobalsettingsstructlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AddAdvanced

<a id="opIdAddAdvanced"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/advanced', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "category": "string",
  "create_date": "2019-08-24T14:15:22Z",
  "data": {},
  "guid": "string",
  "param": "string",
  "partid": 0,
  "setting": {},
  "version": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/advanced',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /advanced`

Returns data based upon filtered json

> Body parameter

```json
{
  "category": "string",
  "create_date": "2019-08-24T14:15:22Z",
  "data": {},
  "guid": "string",
  "param": "string",
  "partid": 0,
  "setting": {},
  "version": 0
}
```

<h3 id="addadvanced-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GlobalSettingsStruct](#schemaglobalsettingsstruct)|true|GlobalSettingsStruct parameters|

> Example responses

> 201 Response

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully created GlobalSetting"
}
```

<h3 id="addadvanced-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|GlobalSettingsCreateSuccessfulResponse|[GlobalSettingsCreateSuccessfulResponse](#schemaglobalsettingscreatesuccessfulresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AdvancedAgainstUUID

<a id="opIdAdvancedAgainstUUID"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/advanced/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/advanced/{uuid}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /advanced/{uuid}`

Get mapping against id and profile

<h3 id="advancedagainstuuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|UUID of mapping|

> Example responses

> 201 Response

```json
{
  "category": "string",
  "create_date": "2019-08-24T14:15:22Z",
  "data": {},
  "guid": "string",
  "param": "string",
  "partid": 0,
  "setting": {},
  "version": 0
}
```

<h3 id="advancedagainstuuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|GlobalSettingsStruct|[GlobalSettingsStruct](#schemaglobalsettingsstruct)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### updateAdvanced

<a id="opIdupdateAdvanced"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/advanced/{uuid}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "category": "string",
  "create_date": "2019-08-24T14:15:22Z",
  "data": {},
  "guid": "string",
  "param": "string",
  "partid": 0,
  "setting": {},
  "version": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/advanced/{uuid}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /advanced/{uuid}`

Get mapping against id and profile

> Body parameter

```json
{
  "category": "string",
  "create_date": "2019-08-24T14:15:22Z",
  "data": {},
  "guid": "string",
  "param": "string",
  "partid": 0,
  "setting": {},
  "version": 0
}
```

<h3 id="updateadvanced-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|UUID of mapping|
|body|body|[GlobalSettingsStruct](#schemaglobalsettingsstruct)|true|GlobalSettingsStruct parameters|

> Example responses

> 201 Response

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully updated GlobalSetting"
}
```

<h3 id="updateadvanced-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|GlobalSettingsUpdateSuccessfulResponse|[GlobalSettingsUpdateSuccessfulResponse](#schemaglobalsettingsupdatesuccessfulresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### DeleteSettings

<a id="opIdDeleteSettings"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/advanced/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/advanced/{uuid}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /advanced/{uuid}`

Get mapping against id and profile

<h3 id="deletesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|UUID of mapping|

> Example responses

> 201 Response

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully deleted GlobalSetting"
}
```

<h3 id="deletesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|GlobalSettingsDeleteSuccessfulResponse|[GlobalSettingsDeleteSuccessfulResponse](#schemaglobalsettingsdeletesuccessfulresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-agent">Agent</h1>

### GetAgentSearchByTypeAndUUID

<a id="opIdGetAgentSearchByTypeAndUUID"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/agent/search/{guid}/{type}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/agent/search/{guid}/{type}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /agent/search/{guid}/{type}`

Get agent by guid and type

<h3 id="getagentsearchbytypeanduuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string|true|guid of agent|
|type|path|string|true|type of agent|

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "active": true,
      "create_date": "2019-08-24T14:15:22Z",
      "expire_date": "2019-08-24T14:15:22Z",
      "gid": 0,
      "host": "string",
      "node": "string",
      "path": "string",
      "port": 0,
      "protocol": "string",
      "ttl": 0,
      "type": "string",
      "uuid": "string",
      "version": 0
    }
  ]
}
```

<h3 id="getagentsearchbytypeanduuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AgentsLocationList|[AgentsLocationList](#schemaagentslocationlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### ListAgents

<a id="opIdListAgents"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/agent/subscribe', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/agent/subscribe',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /agent/subscribe`

Get agent

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "active": true,
      "create_date": "2019-08-24T14:15:22Z",
      "expire_date": "2019-08-24T14:15:22Z",
      "gid": 0,
      "host": "string",
      "node": "string",
      "path": "string",
      "port": 0,
      "protocol": "string",
      "ttl": 0,
      "type": "string",
      "uuid": "string",
      "version": 0
    }
  ]
}
```

<h3 id="listagents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AgentsLocationList|[AgentsLocationList](#schemaagentslocationlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UpdateAgent

<a id="opIdUpdateAgent"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/agent/subscribe/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/agent/subscribe/{uuid}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /agent/subscribe/{uuid}`

Returns data from server

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "active": true,
      "create_date": "2019-08-24T14:15:22Z",
      "expire_date": "2019-08-24T14:15:22Z",
      "gid": 0,
      "host": "string",
      "node": "string",
      "path": "string",
      "port": 0,
      "protocol": "string",
      "ttl": 0,
      "type": "string",
      "uuid": "string",
      "version": 0
    }
  ]
}
```

<h3 id="updateagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AgentsLocationList|[AgentsLocationList](#schemaagentslocationlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### agentsSubUpdateAgentsubAgainstGUID

<a id="opIdagentsSubUpdateAgentsubAgainstGUID"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/agent/subscribe/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/agent/subscribe/{uuid}',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /agent/subscribe/{uuid}`

Update Agent by uuid

<h3 id="agentssubupdateagentsubagainstguid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|guid of agent|

> Example responses

> 201 Response

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully updated AgentLocation settings"
}
```

<h3 id="agentssubupdateagentsubagainstguid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AgentLocationUpdateSuccessResponse|[AgentLocationUpdateSuccessResponse](#schemaagentlocationupdatesuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### DeleteAgent

<a id="opIdDeleteAgent"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/agent/subscribe/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/agent/subscribe/{uuid}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /agent/subscribe/{uuid}`

Returns data from server

<h3 id="deleteagent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type of agent|path|string|true|UUID of agent|

> Example responses

> 201 Response

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully deleted AgentLocation settings"
}
```

<h3 id="deleteagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AgentLocationDeleteSuccessResponse|[AgentLocationDeleteSuccessResponse](#schemaagentlocationdeletesuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetAgentByType

<a id="opIdGetAgentByType"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/agent/type/{type}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/agent/type/{type}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /agent/type/{type}`

Get agent

<h3 id="getagentbytype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type of agent|path|string|true|type of agent|

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "active": true,
      "create_date": "2019-08-24T14:15:22Z",
      "expire_date": "2019-08-24T14:15:22Z",
      "gid": 0,
      "host": "string",
      "node": "string",
      "path": "string",
      "port": 0,
      "protocol": "string",
      "ttl": 0,
      "type": "string",
      "uuid": "string",
      "version": 0
    }
  ]
}
```

<h3 id="getagentbytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AgentsLocationList|[AgentsLocationList](#schemaagentslocationlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AddAgentsub

<a id="opIdAddAgentsub"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/agentsub/protocol', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "active": true,
  "create_date": "2019-08-24T14:15:22Z",
  "expire_date": "2019-08-24T14:15:22Z",
  "gid": 0,
  "host": "string",
  "node": "string",
  "path": "string",
  "port": 0,
  "protocol": "string",
  "ttl": 0,
  "type": "string",
  "uuid": "string",
  "version": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/agentsub/protocol',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /agentsub/protocol`

Returns data from server

> Body parameter

```json
{
  "active": true,
  "create_date": "2019-08-24T14:15:22Z",
  "expire_date": "2019-08-24T14:15:22Z",
  "gid": 0,
  "host": "string",
  "node": "string",
  "path": "string",
  "port": 0,
  "protocol": "string",
  "ttl": 0,
  "type": "string",
  "uuid": "string",
  "version": 0
}
```

<h3 id="addagentsub-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AgentsLocation](#schemaagentslocation)|true|AgentsLocation parameters|

> Example responses

> 201 Response

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully created AgentLocation settings"
}
```

<h3 id="addagentsub-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AgentLocationCreateSuccessResponse|[AgentLocationCreateSuccessResponse](#schemaagentlocationcreatesuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-users">Users</h1>

### userLogin

<a id="opIduserLogin"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/auth', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "password": "sipcapture",
  "type": "internal",
  "username": "admin"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/auth',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /auth`

Returns a JWT Token and UUID attached to user

> Body parameter

```json
{
  "password": "sipcapture",
  "type": "internal",
  "username": "admin"
}
```

<h3 id="userlogin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserLogin](#schemauserlogin)|true|UserLogin parameters|

> Example responses

> 201 Response

```json
{
  "scope": "b9f6q23a-0bde-41ce-cd36-da3dbc17ea12",
  "token": "JWT Token",
  "user": {
    "admin": true,
    "force_password": true
  }
}
```

<h3 id="userlogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|UserLoginSuccessResponse|[UserLoginSuccessResponse](#schemauserloginsuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="success">
This operation does not require authentication
</aside>

### SuccessResponse

<a id="opIdSuccessResponse"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/auth/type/list', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/auth/type/list',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /auth/type/list`

Returns data from server

> Example responses

> 200 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="successresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### CreateUserStruct

<a id="opIdCreateUserStruct"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/users', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/users',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /users`

Returns data from server in array

> Example responses

> 201 Response

```json
{
  "count": 13,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="createuserstruct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|TableUserList|[TableUserList](#schematableuserlist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### CreateUser

<a id="opIdCreateUser"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/users', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "department": "NOC",
  "email": "string",
  "firstname": "string",
  "guid": "string",
  "lastname": "string",
  "params": {},
  "partid": 10,
  "password": "string",
  "usergroup": "admin",
  "username": "string",
  "version": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/users',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /users`

Create a New user

> Body parameter

```json
{
  "department": "NOC",
  "email": "string",
  "firstname": "string",
  "guid": "string",
  "lastname": "string",
  "params": {},
  "partid": 10,
  "password": "string",
  "usergroup": "admin",
  "username": "string",
  "version": 0
}
```

<h3 id="createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUserStruct](#schemacreateuserstruct)|true|CreateUserStruct parameters|

> Example responses

> 201 Response

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully created user"
}
```

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|UserSuccessResponse|[UserSuccessResponse](#schemausersuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### ListUsers

<a id="opIdListUsers"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/users/export', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/users/export',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /users/export`

Returns data from server

> Example responses

<h3 id="listusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|UserFileResponse|None|

<h3 id="listusers-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### groups

<a id="opIdgroups"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/users/groups', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/users/groups',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /users/groups`

Returns the list of groups

> Example responses

> 201 Response

```json
{
  "count": 13,
  "data": [
    "admin",
    "user"
  ]
}
```

<h3 id="groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|UserGroupList|[UserGroupList](#schemausergrouplist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UserFileResponse

<a id="opIdUserFileResponse"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/users/import/replace', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "File": "string"
}';
const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/users/import/replace',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /users/import/replace`

Upload

> Body parameter

```yaml
File: string

```

<h3 id="userfileresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|undefined|[UserFileUpload](#schemauserfileupload)|false|The file to upload.|
|body|body|object|false|none|
|» File|body|string(binary)|false|none|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="userfileresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UpdateUserPassword

<a id="opIdUpdateUserPassword"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/users/update/password/{uuid}', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'null';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/users/update/password/{uuid}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /users/update/password/{uuid}`

Update a user's password

> Body parameter

```json
null
```

<h3 id="updateuserpassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userUUID|path|string|true|uuid of the user to update|
|body|body|any|true|area parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="updateuserpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UpdateUser

<a id="opIdUpdateUser"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/users/{uuid}', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'null';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/users/{uuid}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /users/{uuid}`

Update an existing user

> Body parameter

```json
null
```

<h3 id="updateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userUUID|path|string|true|uuid of the user to update|
|body|body|any|true|UserStruct parameters|

> Example responses

> 201 Response

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully updated user"
}
```

<h3 id="updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|UserUpdateSuccessResponse|[UserUpdateSuccessResponse](#schemauserupdatesuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### DeleteUser

<a id="opIdDeleteUser"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/users/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/users/{uuid}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /users/{uuid}`

Delete an existing User

<h3 id="deleteuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userUUID|path|string|true|uuid of the user to update|

> Example responses

> 201 Response

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully deleted user"
}
```

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|UserDeleteSuccessResponse|[UserDeleteSuccessResponse](#schemauserdeletesuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-recording">Recording</h1>

### GetRecordingData

<a id="opIdGetRecordingData"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/call/recording/data', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "data": [
    {
      "aliasDst": "string",
      "aliasSrc": "string",
      "create_date": 0,
      "destination": 0,
      "dstHost": "string",
      "dstId": "string",
      "dstIp": "string",
      "dstPort": 0.1,
      "id": 0.1,
      "method": "string",
      "method_text": "string",
      "micro_ts": 0,
      "msg_color": "string",
      "prot": 0.1,
      "protocol": 0.1,
      "ruri_user": "string",
      "sid": "string",
      "srcHost": "string",
      "srcId": "string",
      "srcIp": "string",
      "srcPort": 0.1,
      "table": "string"
    }
  ],
  "keys": [
    "callid",
    "srcIp",
    "srcPort"
  ],
  "total": 45
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/call/recording/data',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /call/recording/data`

Returns data based upon filtered json

> Body parameter

```json
{
  "data": [
    {
      "aliasDst": "string",
      "aliasSrc": "string",
      "create_date": 0,
      "destination": 0,
      "dstHost": "string",
      "dstId": "string",
      "dstIp": "string",
      "dstPort": 0.1,
      "id": 0.1,
      "method": "string",
      "method_text": "string",
      "micro_ts": 0,
      "msg_color": "string",
      "prot": 0.1,
      "protocol": 0.1,
      "ruri_user": "string",
      "sid": "string",
      "srcHost": "string",
      "srcId": "string",
      "srcIp": "string",
      "srcPort": 0.1,
      "table": "string"
    }
  ],
  "keys": [
    "callid",
    "srcIp",
    "srcPort"
  ],
  "total": 45
}
```

<h3 id="getrecordingdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchCallData](#schemasearchcalldata)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="getrecordingdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetRecordingPlayDataByType

<a id="opIdGetRecordingPlayDataByType"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/call/recording/play/{uuid}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "data": [
    {
      "aliasDst": "string",
      "aliasSrc": "string",
      "create_date": 0,
      "destination": 0,
      "dstHost": "string",
      "dstId": "string",
      "dstIp": "string",
      "dstPort": 0.1,
      "id": 0.1,
      "method": "string",
      "method_text": "string",
      "micro_ts": 0,
      "msg_color": "string",
      "prot": 0.1,
      "protocol": 0.1,
      "ruri_user": "string",
      "sid": "string",
      "srcHost": "string",
      "srcId": "string",
      "srcIp": "string",
      "srcPort": 0.1,
      "table": "string"
    }
  ],
  "keys": [
    "callid",
    "srcIp",
    "srcPort"
  ],
  "total": 45
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/call/recording/play/{uuid}',
{
  method: 'GET',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /call/recording/play/{uuid}`

Returns data based upon filtered json

> Body parameter

```json
{
  "data": [
    {
      "aliasDst": "string",
      "aliasSrc": "string",
      "create_date": 0,
      "destination": 0,
      "dstHost": "string",
      "dstId": "string",
      "dstIp": "string",
      "dstPort": 0.1,
      "id": 0.1,
      "method": "string",
      "method_text": "string",
      "micro_ts": 0,
      "msg_color": "string",
      "prot": 0.1,
      "protocol": 0.1,
      "ruri_user": "string",
      "sid": "string",
      "srcHost": "string",
      "srcId": "string",
      "srcIp": "string",
      "srcPort": 0.1,
      "table": "string"
    }
  ],
  "keys": [
    "callid",
    "srcIp",
    "srcPort"
  ],
  "total": 45
}
```

<h3 id="getrecordingplaydatabytype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchCallData](#schemasearchcalldata)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="getrecordingplaydatabytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetRecordingInfoDataByType

<a id="opIdGetRecordingInfoDataByType"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/call/recording/info/{uuid}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "data": [
    {
      "aliasDst": "string",
      "aliasSrc": "string",
      "create_date": 0,
      "destination": 0,
      "dstHost": "string",
      "dstId": "string",
      "dstIp": "string",
      "dstPort": 0.1,
      "id": 0.1,
      "method": "string",
      "method_text": "string",
      "micro_ts": 0,
      "msg_color": "string",
      "prot": 0.1,
      "protocol": 0.1,
      "ruri_user": "string",
      "sid": "string",
      "srcHost": "string",
      "srcId": "string",
      "srcIp": "string",
      "srcPort": 0.1,
      "table": "string"
    }
  ],
  "keys": [
    "callid",
    "srcIp",
    "srcPort"
  ],
  "total": 45
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/call/recording/info/{uuid}',
{
  method: 'GET',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /call/recording/info/{uuid}`

Returns data based upon filtered json

> Body parameter

```json
{
  "data": [
    {
      "aliasDst": "string",
      "aliasSrc": "string",
      "create_date": 0,
      "destination": 0,
      "dstHost": "string",
      "dstId": "string",
      "dstIp": "string",
      "dstPort": 0.1,
      "id": 0.1,
      "method": "string",
      "method_text": "string",
      "micro_ts": 0,
      "msg_color": "string",
      "prot": 0.1,
      "protocol": 0.1,
      "ruri_user": "string",
      "sid": "string",
      "srcHost": "string",
      "srcId": "string",
      "srcIp": "string",
      "srcPort": 0.1,
      "table": "string"
    }
  ],
  "keys": [
    "callid",
    "srcIp",
    "srcPort"
  ],
  "total": 45
}
```

<h3 id="getrecordinginfodatabytype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchCallData](#schemasearchcalldata)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="getrecordinginfodatabytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AddRtpRecordFromAgent

<a id="opIdAddRtpRecordFromAgent"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/interception/add/rtprecord', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/interception/add/rtprecord',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /interception/add/rtprecord`

Returns data from server

> Example responses

> 201 Response

```json
{
  "create_date": "2019-08-24T14:15:22Z",
  "delivery": {},
  "description": "string",
  "gid": 0,
  "liid": 0,
  "modify_date": "2019-08-24T14:15:22Z",
  "search_callee": "string",
  "search_caller": "string",
  "search_ip": "string",
  "start_date": "2019-08-24T14:15:22Z",
  "status": true,
  "stop_date": "2019-08-24T14:15:22Z",
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 0
}
```

<h3 id="addrtprecordfromagent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|InterceptionsStruct|[InterceptionsStruct](#schemainterceptionsstruct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### ListInterceptions

<a id="opIdListInterceptions"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/interceptions', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/interceptions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /interceptions`

Returns data from server

> Example responses

> 201 Response

```json
{
  "create_date": "2019-08-24T14:15:22Z",
  "delivery": {},
  "description": "string",
  "gid": 0,
  "liid": 0,
  "modify_date": "2019-08-24T14:15:22Z",
  "search_callee": "string",
  "search_caller": "string",
  "search_ip": "string",
  "start_date": "2019-08-24T14:15:22Z",
  "status": true,
  "stop_date": "2019-08-24T14:15:22Z",
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 0
}
```

<h3 id="listinterceptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|InterceptionsStruct|[InterceptionsStruct](#schemainterceptionsstruct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AddInterceptions

<a id="opIdAddInterceptions"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/interceptions', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "create_date": "2019-08-24T14:15:22Z",
  "delivery": {},
  "description": "string",
  "gid": 0,
  "liid": 0,
  "modify_date": "2019-08-24T14:15:22Z",
  "search_callee": "string",
  "search_caller": "string",
  "search_ip": "string",
  "start_date": "2019-08-24T14:15:22Z",
  "status": true,
  "stop_date": "2019-08-24T14:15:22Z",
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/interceptions',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /interceptions`

Adds interceptions to system

> Body parameter

```json
{
  "create_date": "2019-08-24T14:15:22Z",
  "delivery": {},
  "description": "string",
  "gid": 0,
  "liid": 0,
  "modify_date": "2019-08-24T14:15:22Z",
  "search_callee": "string",
  "search_caller": "string",
  "search_ip": "string",
  "start_date": "2019-08-24T14:15:22Z",
  "status": true,
  "stop_date": "2019-08-24T14:15:22Z",
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 0
}
```

<h3 id="addinterceptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InterceptionsStruct](#schemainterceptionsstruct)|true|InterceptionsStruct parameters|

> Example responses

> 201 Response

```json
{
  "scope": "b9f6q23a-0bde-41ce-cd36-da3dbc17ea12",
  "token": "JWT Token",
  "user": {
    "admin": true,
    "force_password": true
  }
}
```

<h3 id="addinterceptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|UserLoginSuccessResponse|[UserLoginSuccessResponse](#schemauserloginsuccessresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UpdateInterceptions

<a id="opIdUpdateInterceptions"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/interceptions/{uuid}', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'null';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/interceptions/{uuid}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /interceptions/{uuid}`

Update an existing user

> Body parameter

```json
null
```

<h3 id="updateinterceptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|uuid of the interceptions to update|
|body|body|any|true|area parameters|

> Example responses

> 201 Response

```json
{
  "create_date": "2019-08-24T14:15:22Z",
  "delivery": {},
  "description": "string",
  "gid": 0,
  "liid": 0,
  "modify_date": "2019-08-24T14:15:22Z",
  "search_callee": "string",
  "search_caller": "string",
  "search_ip": "string",
  "start_date": "2019-08-24T14:15:22Z",
  "status": true,
  "stop_date": "2019-08-24T14:15:22Z",
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 0
}
```

<h3 id="updateinterceptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|InterceptionsStruct|[InterceptionsStruct](#schemainterceptionsstruct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### DeleteInterceptions

<a id="opIdDeleteInterceptions"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/interceptions/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/interceptions/{uuid}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /interceptions/{uuid}`

Update an existing user

<h3 id="deleteinterceptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|uuid of the interceptions to delete|

> Example responses

> 201 Response

```json
{
  "create_date": "2019-08-24T14:15:22Z",
  "delivery": {},
  "description": "string",
  "gid": 0,
  "liid": 0,
  "modify_date": "2019-08-24T14:15:22Z",
  "search_callee": "string",
  "search_caller": "string",
  "search_ip": "string",
  "start_date": "2019-08-24T14:15:22Z",
  "status": true,
  "stop_date": "2019-08-24T14:15:22Z",
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 0
}
```

<h3 id="deleteinterceptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|InterceptionsStruct|[InterceptionsStruct](#schemainterceptionsstruct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-search">Search</h1>

### GetTransactionDTMF

<a id="opIdGetTransactionDTMF"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/call/report/dtmf', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/call/report/dtmf',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /call/report/dtmf`

Returns log data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="gettransactiondtmf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 400 Response

```json
{
  "error": "string",
  "message": "string",
  "statuscode": 0
}
```

<h3 id="gettransactiondtmf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|DTMFResponse|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<h3 id="gettransactiondtmf-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetTransactionLog

<a id="opIdGetTransactionLog"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/call/report/log', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/call/report/log',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /call/report/log`

Returns log data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="gettransactionlog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 400 Response

```json
{
  "error": "string",
  "message": "string",
  "statuscode": 0
}
```

<h3 id="gettransactionlog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|LOGResponse|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<h3 id="gettransactionlog-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetTransactionQos

<a id="opIdGetTransactionQos"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/call/report/qos', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/call/report/qos',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /call/report/qos`

Returns qos data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="gettransactionqos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "rtcp": {
    "data": [
      {
        "captureId": "2001",
        "capturePass": "myHep",
        "correlation_id": "wvn6zg@127.0.0.1",
        "create_date": "021-10-04T19:16:22.699Z",
        "dbnode": "localnode",
        "dstIp": "127.0.0.1",
        "dstPort": 5060,
        "id": 1030,
        "node": [
          "2001",
          "localnode"
        ],
        "payloadType": 100,
        "profile": "string",
        "proto": "log",
        "protocol": 17,
        "protocolFamily": 2,
        "raw": "string",
        "sid": "wvn6zg@127.0.0.1",
        "srcIp": "127.0.0.1",
        "srcPort": 5080,
        "timeSeconds": 1633374982,
        "timeUseconds": 699000
      }
    ]
  },
  "rtp": {
    "data": [
      {
        "captureId": "2001",
        "capturePass": "myHep",
        "correlation_id": "wvn6zg@127.0.0.1",
        "create_date": "021-10-04T19:16:22.699Z",
        "dbnode": "localnode",
        "dstIp": "127.0.0.1",
        "dstPort": 5060,
        "id": 1030,
        "node": [
          "2001",
          "localnode"
        ],
        "payloadType": 100,
        "profile": "string",
        "proto": "log",
        "protocol": 17,
        "protocolFamily": 2,
        "raw": "string",
        "sid": "wvn6zg@127.0.0.1",
        "srcIp": "127.0.0.1",
        "srcPort": 5080,
        "timeSeconds": 1633374982,
        "timeUseconds": 699000
      }
    ]
  }
}
```

<h3 id="gettransactionqos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SearchTransactionQos|[SearchTransactionQos](#schemasearchtransactionqos)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetTransaction

<a id="opIdGetTransaction"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/call/transaction', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/call/transaction',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /call/transaction`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="gettransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "Data": [
    {
      "Hostinfo": {
        "property1": {
          "alias": "string",
          "color": {
            "background": "string",
            "border": "string",
            "font": "string"
          },
          "custom_params": {
            "origin": "string",
            "team": "string"
          },
          "group": "string",
          "image": "string",
          "ip": "string",
          "ipv6": true,
          "isLinkImg": true,
          "mask": 0,
          "port": 0,
          "servertype": "string",
          "shardid": "string",
          "status": true,
          "type": 0
        },
        "property2": {
          "alias": "string",
          "color": {
            "background": "string",
            "border": "string",
            "font": "string"
          },
          "custom_params": {
            "origin": "string",
            "team": "string"
          },
          "group": "string",
          "image": "string",
          "ip": "string",
          "ipv6": true,
          "isLinkImg": true,
          "mask": 0,
          "port": 0,
          "servertype": "string",
          "shardid": "string",
          "status": true,
          "type": 0
        }
      },
      "alias": {
        "property1": "string",
        "property2": "string"
      },
      "calldata": [
        {
          "aliasDst": "string",
          "aliasSrc": "string",
          "create_date": 0,
          "destination": 0,
          "dstHost": "string",
          "dstId": "string",
          "dstIp": "string",
          "dstPort": 0.1,
          "id": 0.1,
          "method": "string",
          "method_text": "string",
          "micro_ts": 0,
          "msg_color": "string",
          "prot": 0.1,
          "protocol": 0.1,
          "ruri_user": "string",
          "sid": "string",
          "srcHost": "string",
          "srcId": "string",
          "srcIp": "string",
          "srcPort": 0.1,
          "table": "string"
        }
      ],
      "callid": [
        "string"
      ],
      "data": {
        "uac": {
          "property1": {
            "agent": "string",
            "alias": "string",
            "dns": "string",
            "image": "string"
          },
          "property2": {
            "agent": "string",
            "alias": "string",
            "dns": "string",
            "image": "string"
          }
        }
      },
      "hosts": {
        "property1": {
          "host": [
            "string"
          ],
          "position": 0
        },
        "property2": {
          "host": [
            "string"
          ],
          "position": 0
        }
      },
      "messages": [
        {
          "aliasDst": "string",
          "aliasSrc": "string",
          "callid": "string",
          "captid": 0,
          "captureId": 0,
          "capture_ip": "string",
          "correlation_id": "string",
          "create_date": 0,
          "create_ts": 0,
          "cseqm": "string",
          "cseqnum": 0,
          "data": "string",
          "dstIp": "string",
          "dstPort": 0,
          "from_domain": "string",
          "from_user": "string",
          "hepproto": 0,
          "id": 0,
          "ip_tos": 0,
          "method": "string",
          "micro_ts": 0,
          "milliTimeseconds": 0,
          "node": "string",
          "proto": 0,
          "protocol": 0,
          "pty": 0,
          "queue": 0,
          "raw": "string",
          "region_id": "string",
          "respc": 0,
          "ruri_user": "string",
          "sdp": true,
          "sid": "string",
          "srcIp": "string",
          "srcPort": 0,
          "table": "string",
          "tcpflag": 0,
          "timeSeconds": 0,
          "timeUseconds": 0,
          "to_domain": "string",
          "to_user": "string",
          "tss": 0,
          "tsu": 0,
          "uuid": "string",
          "vlan": 0
        }
      ],
      "sdp": {
        "property1": {
          "property1": {
            "audioCodec": 0,
            "destinationSipIP": "string",
            "gid": 0,
            "mediaIpAudio": "string",
            "mediaIpVideo": "string",
            "mediaPortAudio": 0,
            "mediaPortVideo": 0,
            "micro_ts": 0,
            "protocol": 0,
            "request": true,
            "sdpOrigin": "string",
            "sdpSessionID": 0,
            "sipId": 0,
            "sourceSipIP": "string",
            "type": 0,
            "videoCodec": 0
          },
          "property2": {
            "audioCodec": 0,
            "destinationSipIP": "string",
            "gid": 0,
            "mediaIpAudio": "string",
            "mediaIpVideo": "string",
            "mediaPortAudio": 0,
            "mediaPortVideo": 0,
            "micro_ts": 0,
            "protocol": 0,
            "request": true,
            "sdpOrigin": "string",
            "sdpSessionID": 0,
            "sipId": 0,
            "sourceSipIP": "string",
            "type": 0,
            "videoCodec": 0
          }
        },
        "property2": {
          "property1": {
            "audioCodec": 0,
            "destinationSipIP": "string",
            "gid": 0,
            "mediaIpAudio": "string",
            "mediaIpVideo": "string",
            "mediaPortAudio": 0,
            "mediaPortVideo": 0,
            "micro_ts": 0,
            "protocol": 0,
            "request": true,
            "sdpOrigin": "string",
            "sdpSessionID": 0,
            "sipId": 0,
            "sourceSipIP": "string",
            "type": 0,
            "videoCodec": 0
          },
          "property2": {
            "audioCodec": 0,
            "destinationSipIP": "string",
            "gid": 0,
            "mediaIpAudio": "string",
            "mediaIpVideo": "string",
            "mediaPortAudio": 0,
            "mediaPortVideo": 0,
            "micro_ts": 0,
            "protocol": 0,
            "request": true,
            "sdpOrigin": "string",
            "sdpSessionID": 0,
            "sipId": 0,
            "sourceSipIP": "string",
            "type": 0,
            "videoCodec": 0
          }
        }
      },
      "transaction": [
        {
          "Codecs": [
            {}
          ],
          "Correlations": [
            {}
          ],
          "CustomString->Key": [
            {}
          ],
          "CustomString->Value": [
            {}
          ],
          "CustomUInt->Key": [
            {}
          ],
          "CustomUInt->Value": [
            {}
          ],
          "IPs": [
            "string"
          ],
          "Methods->Key": [
            "string"
          ],
          "Methods->Value": [
            0
          ],
          "Metrics->Key": [
            "string"
          ],
          "Metrics->Value": [
            0
          ],
          "aliasDst": "string",
          "aliasSrc": "string",
          "anumber_ext": "string",
          "archive": true,
          "auth_user": "string",
          "bnumber_ext": "string",
          "callid": "string",
          "captid": 0,
          "cdr_connect": 0,
          "cdr_progress": 0,
          "cdr_ringing": 0,
          "cdr_start": 0,
          "cdr_stop": 0,
          "codia": 0,
          "contact_user": "string",
          "correlation_id": "string",
          "create_date": 0,
          "custom_1": "string",
          "custom_2": "string",
          "custom_3": "string",
          "custom_4": "string",
          "custom_5": "string",
          "custom_6": "string",
          "data": "string",
          "dest_cc": "string",
          "destcc": "string",
          "destination_ip": "string",
          "destination_port": 0,
          "destlan": 0.1,
          "destlat": 0.1,
          "did": "string",
          "diversion_user": "string",
          "duration": 0,
          "event": 0,
          "family": 0,
          "from_domain": "string",
          "from_user": "string",
          "geo_cc": "string",
          "geocc": "string",
          "geolan": 0,
          "geolat": 0,
          "ipgroup_in": "string",
          "ipgroup_out": "string",
          "jitter": 0,
          "mos": 0,
          "msg_info": "string",
          "one_way_audio": true,
          "pdd": 0,
          "pid_user": "string",
          "pl": 0,
          "proto": 0,
          "pty": 0,
          "queue": 0,
          "reason": 0,
          "region_id": "string",
          "rtp_stat_a": "string",
          "rtp_stat_b": "string",
          "ruri_user": "string",
          "sdpap": 0,
          "sdpap_b": 0,
          "sdpip": 0,
          "sdpip_b": 0,
          "sdpmedhost": "string",
          "sdpmedpr": "string",
          "sdpsid": 0,
          "sdpsver": 0,
          "sdpvp": 0,
          "sdpvp_b": 0,
          "server_type_in": "string",
          "server_type_out": "string",
          "sid": "string",
          "source_ip": "string",
          "source_port": 0,
          "sourcecc": "string",
          "sourcelan": 0.1,
          "sourcelat": 0.1,
          "srd": 0,
          "sss": 0,
          "status": 0,
          "table": "string",
          "termcode": 0,
          "termdir": 0,
          "to_domain": "string",
          "to_user": "string",
          "uas": "string",
          "update_ts": 0,
          "updcounter": 0,
          "usergroup": "string",
          "uuid": "string",
          "vlan": 0,
          "vqr_a": "string",
          "vqr_b": "string",
          "vst": 0,
          "xgroup": "string"
        }
      ]
    }
  ],
  "keys": [
    "string"
  ],
  "total": 0
}
```

<h3 id="gettransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SearchTransactionResponse|[SearchTransactionResponse](#schemasearchtransactionresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### SearchData

<a id="opIdSearchData"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/search/call/data', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/search/call/data',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /search/call/data`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="searchdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "data": [
    {
      "aliasDst": "string",
      "aliasSrc": "string",
      "create_date": 0,
      "destination": 0,
      "dstHost": "string",
      "dstId": "string",
      "dstIp": "string",
      "dstPort": 0.1,
      "id": 0.1,
      "method": "string",
      "method_text": "string",
      "micro_ts": 0,
      "msg_color": "string",
      "prot": 0.1,
      "protocol": 0.1,
      "ruri_user": "string",
      "sid": "string",
      "srcHost": "string",
      "srcId": "string",
      "srcIp": "string",
      "srcPort": 0.1,
      "table": "string"
    }
  ],
  "keys": [
    "callid",
    "srcIp",
    "srcPort"
  ],
  "total": 45
}
```

<h3 id="searchdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SearchCallData|[SearchCallData](#schemasearchcalldata)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### callDecodeMessage

<a id="opIdcallDecodeMessage"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/search/call/decode/message', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/search/call/decode/message',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /search/call/decode/message`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="calldecodemessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "data": [
    {
      "decoded": [
        {
          "_source": {
            "_layers": {
              "eth": {
                "eth.dst": "06:3d:20:12:10:20",
                "eth.dst_tree": {
                  "eth.addr": "06:3d:20:12:10:20",
                  "eth.addr_resolved": "06:3d:20:12:10:20",
                  "eth.dst_resolved": "06:3d:20:12:10:20",
                  "eth.ig": "0",
                  "eth.lg": "1"
                },
                "eth.src": "02:5d:69:74:20:12",
                "eth.src_tree": {
                  "eth.addr": "02:5d:69:74:20:12",
                  "eth.addr_resolved": "02:5d:69:74:20:12",
                  "eth.ig": "0",
                  "eth.lg": "1",
                  "src_resolved": "02:5d:69:74:20:12"
                },
                "eth.type": "\"0x00000800\""
              },
              "frame": {
                "frame.cap_len": "1058",
                "frame.encap_type": "1",
                "frame.ignored": "0",
                "frame.interface_id": "0",
                "frame.interface_id_tree": {
                  "frame.interface_name": "-"
                },
                "frame.len": "1058",
                "frame.marked": "0",
                "frame.number": "1",
                "frame.offset_shift": "0.000000000",
                "frame.protocols": "eth:ethertype:ip:udp:sip:sdp",
                "frame.time": "Sep 30, 2021 07:06:10.950000000 UTC",
                "frame.time_delta": "0.000000000",
                "frame.time_delta_displayed": "0.000000000",
                "frame.time_epoch": "1632985570.950000000",
                "frame.time_relative": "0.000000000"
              },
              "ip": {
                "ip.checksum": "0x0000ffa5",
                "ip.checksum.status": "2",
                "ip.dsfield": "0x0000ffa5",
                "ip.dsfield_tree": {
                  "ip.dsfield_tree.dscp": "0",
                  "ip.dsfield_tree.ecn": "0"
                },
                "ip.dst": "127.0.0.1",
                "ip.dst_host": "127.0.0.1",
                "ip.flags": "0x00000000",
                "ip.flags_tree": {
                  "ip.flags_tree.df": "0",
                  "ip.flags_tree.mf": "0",
                  "ip.flags_tree.rb": "0"
                },
                "ip.frag_offset": "0",
                "ip.hdr_len": "20",
                "ip.host": "127.0.0.1",
                "ip.id": "0x00000000",
                "ip.len": "1044",
                "ip.proto": "17",
                "ip.src": "127.0.0.1",
                "ip.src_host": "127.0.0.1",
                "ip.ttl": "54",
                "ip.version": "4"
              },
              "sip": {
                "sip.Request-line": "INVITE sip:196@example.com;user=phone SIP/2.0",
                "sip.Request-line_tree": {
                  "sip.Method": "INVITE",
                  "sip.Request-line_tree": {
                    "sip.r-uri.host": "example.com",
                    "sip.r-uri.user": "196"
                  },
                  "sip.r-uri": "sip:196@example.com;user=phone",
                  "sip.resend": "0"
                },
                "sip.msg_body": {
                  "sdp.connection_info": "\"IN IP4 192.168.10.193\"",
                  "sdp.media": "audio 5004 RTP/AVP 0 8 9 18 101",
                  "sdp.media_attr": "fmtp:101 0-15",
                  "sdp.media_attr_tree": {
                    "sdp.fmtp.parameter": "0-15",
                    "sdp.media.format": "101",
                    "sdp.media_attribute.field": "fmtp"
                  },
                  "sdp.media_tree": {
                    "sdp.media.format": "DynamicRTP-Type-101",
                    "sdp.media.media": "audio",
                    "sdp.media.port": "5004",
                    "sdp.media.port_string": "5004",
                    "sdp.media.proto": "RTP/AVP"
                  },
                  "sdp.owner": "hepgenjs 8000 8000 IN IP4 192.168.10.193",
                  "sdp.owner_tree": {
                    "sdp.owner.address": "192.168.10.193",
                    "sdp.owner.address_type": "IP4",
                    "sdp.owner.network_type": "IN",
                    "sdp.owner.sessionid": "8000",
                    "sdp.owner.username": "hepgenjs",
                    "sdp.owner.version": "8000"
                  },
                  "sdp.session_name": "\"SIP Call\"",
                  "sdp.time": "\"0 0\"",
                  "sdp.time_tree": {
                    "sdp.time.start": "0",
                    "sdp.time.stop": "0"
                  },
                  "sdp.version": "0",
                  "sip.connection_info_tree": {
                    "sdp.connection_info.address": "192.168.10.193",
                    "sdp.connection_info.address_type": "IP4",
                    "sdp.connection_info.network_type": "IN"
                  }
                },
                "sip.msg_hdr": "\"Via: SIP/2.0/UDP 192.168.10.193:5064;branch=z9hG4bK923381359;rport\\r\\nFrom: <sip:hepgenjs@example.com;user=phone>;tag=415746302\\r\\nTo: <sip:196@example.com;user=phone>\\r\\nCall-ID: a6xh18@127.0.0.1\\r\\nCSeq: 440 INVITE\\r\\nContact: <sip:hepgenjs@192.168.10.193:5064;user=phone>\\r\\nMax-Forwards: 70\\r\\nUser-Agent: HEPGEN.JS@example.com\\r\\nPrivacy: none\\r\\nP-Preferred-Identity: <sip:hepgenjs@example.com;user=phone>\\r\\nSupported: replaces, path, timer, eventlist\\r\\nAllow: INVITE, ACK, OPTIONS, CANCEL, BYE, SUBSCRIBE, NOTIFY, INFO, REFER, UPDATE, MESSAGE\\r\\nContent-Type: application/sdp\\r\\nAccept: application/sdp, application/dtmf-relay\\r\\nContent-Length:   313\\r\\n\\r\\nv=0\\r\\no=hepgenjs 8000 8000 IN IP4 192.168.10.193\\r\\ns=SIP Call\\r\\nc=IN IP4 192.168.10.193\\r\\nt=0 0\\r\\nm=audio 5004 RTP/AVP 0 8 9 18 101\\r\\na=sendrecv\\r\\na=rtpmap:0 PCMU/8000\\r\\na=ptime:20\\r\\na=rtpmap:8 PCMA/8000\\r\\na=rtpmap:9 G722/8000\\r\\na=rtpmap:18 G729/8000\\r\\na=fmtp:18 annexb=no\\r\\na=rtpmap:101 telephone-event/8000\\r\\na=fmtp:101 0-15\\r\\n\\r\\n\\r\\n\"",
                "sip.msg_hdr_tree": {}
              },
              "udp": {
                "udp.checksum": "0x0000ffa5",
                "udp.checksum.status": "2",
                "udp.dstport": "5060",
                "udp.length": "1024",
                "udp.port": "5060",
                "udp.srcport": "5060",
                "udp.stream": "0"
              }
            }
          },
          "_type": "pcap_file"
        }
      ]
    }
  ]
}
```

<h3 id="calldecodemessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|MessageDecoded|[MessageDecoded](#schemamessagedecoded)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### callMessage

<a id="opIdcallMessage"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/search/call/message', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/search/call/message',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /search/call/message`

Returns message data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="callmessage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "data": [
    {
      "aliasDst": "string",
      "aliasSrc": "string",
      "create_date": 0,
      "destination": 0,
      "dstHost": "string",
      "dstId": "string",
      "dstIp": "string",
      "dstPort": 0.1,
      "id": 0.1,
      "method": "string",
      "method_text": "string",
      "micro_ts": 0,
      "msg_color": "string",
      "prot": 0.1,
      "protocol": 0.1,
      "ruri_user": "string",
      "sid": "string",
      "srcHost": "string",
      "srcId": "string",
      "srcIp": "string",
      "srcPort": 0.1,
      "table": "string"
    }
  ],
  "keys": [
    "callid",
    "srcIp",
    "srcPort"
  ],
  "total": 45
}
```

<h3 id="callmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SearchCallData|[SearchCallData](#schemasearchcalldata)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetTypeTransaction

<a id="opIdGetTypeTransaction"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/search/transaction/type', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/search/transaction/type',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /search/transaction/type`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="gettypetransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 400 Response

```json
{
  "error": "string",
  "message": "string",
  "statuscode": 0
}
```

<h3 id="gettypetransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|string|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<h3 id="gettypetransaction-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-clickhouse">Clickhouse</h1>

### rawSearchData

<a id="opIdrawSearchData"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/clickhouse/query/raw', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "query": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/clickhouse/query/raw',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /clickhouse/query/raw`

Returns data based upon filtered json

> Body parameter

```json
{
  "query": "string"
}
```

<h3 id="rawsearchdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClickhouseObject](#schemaclickhouseobject)|true|ClickhouseObject parameters|

> Example responses

> 201 Response

```json
{
  "data": {
    "property1": {
      "name": "string",
      "type": "string"
    },
    "property2": {
      "name": "string",
      "type": "string"
    }
  },
  "total": 0
}
```

<h3 id="rawsearchdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ClickhouseRawQuery|[ClickhouseRawQuery](#schemaclickhouserawquery)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-dashboard">Dashboard</h1>

### ListDashboard

<a id="opIdListDashboard"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/dashboard/reset', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/dashboard/reset',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /dashboard/reset`

Get Dashbroad list

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="listdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetDashboard

<a id="opIdGetDashboard"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/dashboard/store/{dashboardId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/dashboard/store/{dashboardId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /dashboard/store/{dashboardId}`

Get Dashboard Against a GUID

<h3 id="getdashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Dashboard id|path|string|true|param of dashboard|

> Example responses

> 400 Response

```json
{
  "error": "string",
  "message": "string",
  "statuscode": 0
}
```

<h3 id="getdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|DashboardElement|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<h3 id="getdashboard-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UpdateDashboard

<a id="opIdUpdateDashboard"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/dashboard/store/{dashboardId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "data": {},
  "guid": "string",
  "params": "string",
  "protocol_id": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/dashboard/store/{dashboardId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /dashboard/store/{dashboardId}`

Add new dashboard

> Body parameter

```json
{
  "data": {},
  "guid": "string",
  "params": "string",
  "protocol_id": "string"
}
```

<h3 id="updatedashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardid|path|string|true|the param of dashboard|
|body|body|[UserSettings](#schemausersettings)|true|json of dashboard|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="updatedashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### CreateDashboard

<a id="opIdCreateDashboard"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/dashboard/store/{dashboardId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "data": {},
  "guid": "string",
  "params": "string",
  "protocol_id": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/dashboard/store/{dashboardId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /dashboard/store/{dashboardId}`

Add new dashboard

> Body parameter

```json
{
  "data": {},
  "guid": "string",
  "params": "string",
  "protocol_id": "string"
}
```

<h3 id="createdashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dashboardid|path|string|true|the param of dashboard|
|body|body|[UserSettings](#schemausersettings)|true|json of dashboard|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="createdashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### DeleteDashboard

<a id="opIdDeleteDashboard"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/dashboard/store/{dashboardId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/dashboard/store/{dashboardId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /dashboard/store/{dashboardId}`

Delete a dashboard

<h3 id="deletedashboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|param|path|string|true|the param of dashboard|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="deletedashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-nodes">Nodes</h1>

### GroupListMapping

<a id="opIdGroupListMapping"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/database/group/list', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/database/group/list',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /database/group/list`

Returns group of nodes from server

> Example responses

> 201 Response

```json
{
  "count": 1,
  "data": [
    {
      "arhive": false,
      "db_archive": "hepic_archive",
      "db_name": "hepic_data",
      "host": "148.251.238.121",
      "name": "DE7 Node",
      "node": "\"\"",
      "online": true,
      "primary": false,
      "table_prefix": "string",
      "value": "de7node"
    }
  ]
}
```

<h3 id="grouplistmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|NodeList|[NodeList](#schemanodelist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### NodeListMapping

<a id="opIdNodeListMapping"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/database/node/list', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/database/node/list',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /database/node/list`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 1,
  "data": [
    {
      "arhive": false,
      "db_archive": "hepic_archive",
      "db_name": "hepic_data",
      "host": "148.251.238.121",
      "name": "DE7 Node",
      "node": "\"\"",
      "online": true,
      "primary": false,
      "table_prefix": "string",
      "value": "de7node"
    }
  ]
}
```

<h3 id="nodelistmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|NodeList|[NodeList](#schemanodelist)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### ListMapping

<a id="opIdListMapping"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/database/webnode/list', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/database/webnode/list',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /database/webnode/list`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="listmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-export">Export</h1>

### actionActive

<a id="opIdactionActive"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/export/action/active', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/action/active',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /export/action/active`

Returns log data based upon filtered json

> Example responses

> 400 Response

```json
{
  "error": "string",
  "message": "string",
  "statuscode": 0
}
```

<h3 id="actionactive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ExportAction|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<h3 id="actionactive-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### hepicapp

<a id="opIdhepicapp"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/export/action/hepicapp', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/action/hepicapp',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /export/action/hepicapp`

Returns log data based upon filtered json

> Example responses

> 201 Response

```json
{
  "data": {
    "message": "The backup has been created!"
  },
  "total": 1
}
```

<h3 id="hepicapp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ExportActionRTPagent|[ExportActionRTPagent](#schemaexportactionrtpagent)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### hepicapplog

<a id="opIdhepicapplog"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/export/action/logs', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/action/logs',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /export/action/logs`

Returns log data based upon filtered json

> Example responses

> 201 Response

```json
{
  "data": {
    "message": "The backup has been created!"
  },
  "total": 1
}
```

<h3 id="hepicapplog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ExportActionRTPagent|[ExportActionRTPagent](#schemaexportactionrtpagent)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### picserver

<a id="opIdpicserver"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/export/action/picserver', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/action/picserver',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /export/action/picserver`

Returns log data based upon filtered json

> Example responses

> 201 Response

```json
{
  "data": {
    "message": "The backup has been created!"
  },
  "total": 1
}
```

<h3 id="picserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ExportActionRTPagent|[ExportActionRTPagent](#schemaexportactionrtpagent)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### rtpagetn

<a id="opIdrtpagetn"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/export/action/rtpagent', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/action/rtpagent',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /export/action/rtpagent`

Returns log data based upon filtered json

> Example responses

> 201 Response

```json
{
  "data": {
    "message": "The backup has been created!"
  },
  "total": 1
}
```

<h3 id="rtpagetn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ExportActionRTPagent|[ExportActionRTPagent](#schemaexportactionrtpagent)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetMessagesAsPCap

<a id="opIdGetMessagesAsPCap"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/export/call/messages/pcap', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/call/messages/pcap',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /export/call/messages/pcap`

Returns pcap data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="getmessagesaspcap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 200 Response

```json
{
  "File": {}
}
```

<h3 id="getmessagesaspcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|PCAPResponse|[PCAPResponse](#schemapcapresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetMessagesAsSIPP

<a id="opIdGetMessagesAsSIPP"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/export/call/messages/sipp', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/call/messages/sipp',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /export/call/messages/sipp`

Returns text data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="getmessagesassipp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "File": {}
}
```

<h3 id="getmessagesassipp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SIPPResponse|[SIPPResponse](#schemasippresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetMessagesAsText

<a id="opIdGetMessagesAsText"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/export/call/messages/text', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/call/messages/text',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /export/call/messages/text`

Returns text data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="getmessagesastext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "File": {}
}
```

<h3 id="getmessagesastext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|TextResponse|[TextResponse](#schematextresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetDataFromStenographer

<a id="opIdGetDataFromStenographer"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/export/call/stenographer', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/call/stenographer',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /export/call/stenographer`

Returns pcap data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="getdatafromstenographer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|false|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "File": {}
}
```

<h3 id="getdatafromstenographer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|StenographerResponse|[StenographerResponse](#schemastenographerresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### saveToArchive

<a id="opIdsaveToArchive"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/export/call/transaction/archive', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/call/transaction/archive',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /export/call/transaction/archive`

Save transaction data to Archive

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="savetoarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="savetoarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetTransactionLink

<a id="opIdGetTransactionLink"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/export/call/transaction/link', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/call/transaction/link',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /export/call/transaction/link`

Returns text data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="gettransactionlink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "data": {
    "url": "http://example.com/share/#",
    "uuid": "4141a255-d382-46ef-974e-62dc830acc8f"
  }
}
```

<h3 id="gettransactionlink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|LinkResponse|[LinkResponse](#schemalinkresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### exportCallTransactionReport

<a id="opIdexportCallTransactionReport"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/export/call/transaction/report', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/export/call/transaction/report',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /export/call/transaction/report`

Returns transaction data based upon filtered json

> Body parameter

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}
```

<h3 id="exportcalltransactionreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchObject](#schemasearchobject)|false|SearchObject parameters|

> Example responses

> 400 Response

```json
{
  "error": "string",
  "message": "string",
  "statuscode": 0
}
```

<h3 id="exportcalltransactionreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ReportResponse|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<h3 id="exportcalltransactionreport-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-hepsub">HepSub</h1>

### GetHepSubAgainstUUID

<a id="opIdGetHepSubAgainstUUID"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/hepsub/protocol', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "create_date": "2020-10-20T21:15:45+02:00",
  "guid": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "hep_alias": "SIP",
  "hepid": 1,
  "mapping": {},
  "profile": "call",
  "version": 1603221345489
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/hepsub/protocol',
{
  method: 'GET',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /hepsub/protocol`

Add new Hepsub information

> Body parameter

```json
{
  "create_date": "2020-10-20T21:15:45+02:00",
  "guid": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "hep_alias": "SIP",
  "hepid": 1,
  "mapping": {},
  "profile": "call",
  "version": 1603221345489
}
```

<h3 id="gethepsubagainstuuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HepsubSchema](#schemahepsubschema)|true|HepsubSchema parameters|

> Example responses

> 201 Response

```json
{
  "create_date": "2020-10-20T21:15:45+02:00",
  "guid": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "hep_alias": "SIP",
  "hepid": 1,
  "mapping": {},
  "profile": "call",
  "version": 1603221345489
}
```

<h3 id="gethepsubagainstuuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|HepsubSchema|[HepsubSchema](#schemahepsubschema)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AddHepSub

<a id="opIdAddHepSub"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/hepsub/protocol', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "create_date": "2020-10-20T21:15:45+02:00",
  "guid": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "hep_alias": "SIP",
  "hepid": 1,
  "mapping": {},
  "profile": "call",
  "version": 1603221345489
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/hepsub/protocol',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /hepsub/protocol`

Add new Hepsub information

> Body parameter

```json
{
  "create_date": "2020-10-20T21:15:45+02:00",
  "guid": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "hep_alias": "SIP",
  "hepid": 1,
  "mapping": {},
  "profile": "call",
  "version": 1603221345489
}
```

<h3 id="addhepsub-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HepsubSchema](#schemahepsubschema)|true|HepsubSchema parameters|

> Example responses

> 201 Response

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully created hepsub settings"
}
```

<h3 id="addhepsub-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|HepsubCreateSuccessResponse|[HepsubCreateSuccessResponse](#schemahepsubcreatesuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UpdateHepSubAgainstUUID

<a id="opIdUpdateHepSubAgainstUUID"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/hepsub/protocol/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/hepsub/protocol/{uuid}',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /hepsub/protocol/{uuid}`

Delete hepsub by guid

<h3 id="updatehepsubagainstuuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string|true|guid of hepsub item|

> Example responses

> 201 Response

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully updated hepsub settings"
}
```

<h3 id="updatehepsubagainstuuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|HepsubUpdateSuccessResponse|[HepsubUpdateSuccessResponse](#schemahepsubupdatesuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### hepSubDeleteHepSubAgainstUUID

<a id="opIdhepSubDeleteHepSubAgainstUUID"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/hepsub/protocol/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/hepsub/protocol/{uuid}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /hepsub/protocol/{uuid}`

Delete hepsub by guid

<h3 id="hepsubdeletehepsubagainstuuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string|true|guid of hepsub item|

> Example responses

> 201 Response

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully deleted hepsub settings"
}
```

<h3 id="hepsubdeletehepsubagainstuuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|HepsubDeleteSuccessResponse|[HepsubDeleteSuccessResponse](#schemahepsubdeletesuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AddHepsubsearch

<a id="opIdAddHepsubsearch"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/hepsub/search', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "create_date": "2020-10-20T21:15:45+02:00",
  "guid": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "hep_alias": "SIP",
  "hepid": 1,
  "mapping": {},
  "profile": "call",
  "version": 1603221345489
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/hepsub/search',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /hepsub/search`

Returns data from server

> Body parameter

```json
{
  "create_date": "2020-10-20T21:15:45+02:00",
  "guid": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "hep_alias": "SIP",
  "hepid": 1,
  "mapping": {},
  "profile": "call",
  "version": 1603221345489
}
```

<h3 id="addhepsubsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HepsubSchema](#schemahepsubschema)|true|HepsubSchema parameters|

> Example responses

> 201 Response

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully created hepsub settings"
}
```

<h3 id="addhepsubsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|HepsubCreateSuccessResponse|[HepsubCreateSuccessResponse](#schemahepsubcreatesuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-import">Import</h1>

### GetMessagesAsPCap

<a id="opIdGetMessagesAsPCap"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/import/data/pcap', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/import/data/pcap',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /import/data/pcap`

Returns pcap data based upon filtered json

> Body parameter

```json
false
```

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="getmessagesaspcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetMessagesAsPCapNow

<a id="opIdGetMessagesAsPCapNow"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/import/data/pcap/now', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/import/data/pcap/now',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /import/data/pcap/now`

Returns pcap data based upon filtered json

> Body parameter

```json
false
```

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="getmessagesaspcapnow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-lookupip">LookupIP</h1>

### GetAllLookupIP

<a id="opIdGetAllLookupIP"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/ipalias', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/ipalias',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /ipalias`

Returns the list of aliases

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="getalllookupip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### ipAliasLookup

<a id="opIdipAliasLookup"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/ipalias', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "alias": "mediaServer",
  "group": "Peering",
  "ip": "192.168.10.20",
  "ipobject": {
    "alias": "mediaServer",
    "color": {
      "background": "#c8c8c8",
      "border": "#000000",
      "font": "#000000"
    },
    "group": "Peering",
    "image": "./img/gateways/phone.png",
    "ip": "192.168.10.20",
    "ipv6": false,
    "mask": 32,
    "port": 5060,
    "servertype": "Sansay-Peering",
    "shardid": "allports",
    "status": true,
    "type": 0
  },
  "ipv6": false,
  "mask": 32,
  "port": 5060,
  "servertype": "Sansay-Peering",
  "shardid": "allports",
  "status": true,
  "type": 0,
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 1611662524002
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/ipalias',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /ipalias`

Adds LookupIP to system

> Body parameter

```json
{
  "alias": "mediaServer",
  "group": "Peering",
  "ip": "192.168.10.20",
  "ipobject": {
    "alias": "mediaServer",
    "color": {
      "background": "#c8c8c8",
      "border": "#000000",
      "font": "#000000"
    },
    "group": "Peering",
    "image": "./img/gateways/phone.png",
    "ip": "192.168.10.20",
    "ipv6": false,
    "mask": 32,
    "port": 5060,
    "servertype": "Sansay-Peering",
    "shardid": "allports",
    "status": true,
    "type": 0
  },
  "ipv6": false,
  "mask": 32,
  "port": 5060,
  "servertype": "Sansay-Peering",
  "shardid": "allports",
  "status": true,
  "type": 0,
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 1611662524002
}
```

<h3 id="ipaliaslookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AliasSwaggerStruct](#schemaaliasswaggerstruct)|true|AliasSwaggerStruct parameters|

> Example responses

> 201 Response

```json
{
  "alias": "mediaServer",
  "group": "Peering",
  "ip": "192.168.10.20",
  "ipobject": {
    "alias": "mediaServer",
    "color": {
      "background": "#c8c8c8",
      "border": "#000000",
      "font": "#000000"
    },
    "group": "Peering",
    "image": "./img/gateways/phone.png",
    "ip": "192.168.10.20",
    "ipv6": false,
    "mask": 32,
    "port": 5060,
    "servertype": "Sansay-Peering",
    "shardid": "allports",
    "status": true,
    "type": 0
  },
  "ipv6": false,
  "mask": 32,
  "port": 5060,
  "servertype": "Sansay-Peering",
  "shardid": "allports",
  "status": true,
  "type": 0,
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 1611662524002
}
```

<h3 id="ipaliaslookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AliasSwaggerStruct|[AliasSwaggerStruct](#schemaaliasswaggerstruct)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### DeleteLookupIP

<a id="opIdDeleteLookupIP"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/ipalias/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/ipalias/{uuid}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /ipalias/{uuid}`

delete an alias based upon uuid

<h3 id="deletelookupip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|uuid of the LookupIP to delete|

> Example responses

<h3 id="deletelookupip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|LookupIPStruct|None|

<h3 id="deletelookupip-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### FileDownload

<a id="opIdFileDownload"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/octet-stream'
}

r = requests.get('https://api.hepic/api/v3/ipalias/export', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/octet-stream'
};

fetch('https://api.hepic/api/v3/ipalias/export',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /ipalias/export`

Returns a csv file of the aliases

> Example responses

> 201 Response

<h3 id="filedownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### IPAliasFileResponse

<a id="opIdIPAliasFileResponse"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/ipalias/import/replace', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "File": "string"
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/ipalias/import/replace',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /ipalias/import/replace`

Import a csv file of aliases into system

> Body parameter

```yaml
File: string

```

<h3 id="ipaliasfileresponse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|undefined|[IPAliasFileUpload](#schemaipaliasfileupload)|false|The file to upload.|
|body|body|object|false|none|
|» File|body|string(binary)|false|none|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="ipaliasfileresponse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UpdateLookupIP

<a id="opIdUpdateLookupIP"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/lookupip/{uuid}', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'null';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/lookupip/{uuid}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /lookupip/{uuid}`

Update an existing alias based upon the lookup

> Body parameter

```json
null
```

<h3 id="updatelookupip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|uuid of the LookupIP to update|
|body|body|any|true|LookupIPStruct parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="updatelookupip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-mapping">Mapping</h1>

### ListProfiles

<a id="opIdListProfiles"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/mapping/protocol', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/mapping/protocol',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /mapping/protocol`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="listprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AddMapping

<a id="opIdAddMapping"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/mapping/protocol', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/mapping/protocol',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /mapping/protocol`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="addmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### resetProtocols

<a id="opIdresetProtocols"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/mapping/protocol/reset', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/mapping/protocol/reset',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /mapping/protocol/reset`

Get mapping against id and profile

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="resetprotocols-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### ResetMapping

<a id="opIdResetMapping"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/mapping/protocol/reset/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/mapping/protocol/reset/{uuid}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /mapping/protocol/reset/{uuid}`

Get mapping against id and profile

<h3 id="resetmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|uuid of mapping|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="resetmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetProtocolMapping

<a id="opIdGetProtocolMapping"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/mapping/protocol/{id}/{transaction}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/mapping/protocol/{id}/{transaction}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /mapping/protocol/{id}/{transaction}`

Get mapping against id and profile

<h3 id="getprotocolmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|undefined|true|hepid|
|transaction|path|string|true|profile|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="getprotocolmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### getMapping

<a id="opIdgetMapping"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/mapping/protocol/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/mapping/protocol/{uuid}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /mapping/protocol/{uuid}`

Get mapping against id and profile

<h3 id="getmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|uuid of mapping|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="getmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### DeleteMapping

<a id="opIdDeleteMapping"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/mapping/protocol/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/mapping/protocol/{uuid}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /mapping/protocol/{uuid}`

Get mapping against id and profile

<h3 id="deletemapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|uuid of mapping|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="deletemapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### ListMapping

<a id="opIdListMapping"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/mapping/protocols', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/mapping/protocols',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /mapping/protocols`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="listmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-prometheus">Prometheus</h1>

### prometheusData

<a id="opIdprometheusData"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/prometheus/data', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "limit": 0,
    "metrics": [
      "string"
    ],
    "precision": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/prometheus/data',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /prometheus/data`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "limit": 0,
    "metrics": [
      "string"
    ],
    "precision": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

<h3 id="prometheusdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrometheusObject](#schemaprometheusobject)|true|PrometheusObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="prometheusdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### prometheusUserLabel

<a id="opIdprometheusUserLabel"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/prometheus/label/{userlabel}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/prometheus/label/{userlabel}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /prometheus/label/{userlabel}`

Returns data based upon filtered json

> Example responses

> 400 Response

```json
{
  "error": "string",
  "message": "string",
  "statuscode": 0
}
```

<h3 id="prometheususerlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListLabels|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<h3 id="prometheususerlabel-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### prometheusLabels

<a id="opIdprometheusLabels"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/prometheus/labels', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/prometheus/labels',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /prometheus/labels`

Returns data based upon filtered json

> Example responses

> 400 Response

```json
{
  "error": "string",
  "message": "string",
  "statuscode": 0
}
```

<h3 id="prometheuslabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListLabels|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<h3 id="prometheuslabels-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### prometheusValue

<a id="opIdprometheusValue"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/prometheus/value', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "limit": 0,
    "metrics": [
      "string"
    ],
    "precision": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/prometheus/value',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /prometheus/value`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "limit": 0,
    "metrics": [
      "string"
    ],
    "precision": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

<h3 id="prometheusvalue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrometheusObject](#schemaprometheusobject)|true|PrometheusObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="prometheusvalue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-protocol">Protocol</h1>

### ListSettings

<a id="opIdListSettings"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/protocol/search/{id}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/protocol/search/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /protocol/search/{id}`

Returns the list of settings

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="listsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AddProtocol

<a id="opIdAddProtocol"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/protocol/{id}', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/protocol/{id}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /protocol/{id}`

Adds alias to system

> Body parameter

```json
false
```

> Example responses

> 201 Response

```json
{
  "scope": "b9f6q23a-0bde-41ce-cd36-da3dbc17ea12",
  "token": "JWT Token",
  "user": {
    "admin": true,
    "force_password": true
  }
}
```

<h3 id="addprotocol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|UserLoginSuccessResponse|[UserLoginSuccessResponse](#schemauserloginsuccessresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UpdateAlias

<a id="opIdUpdateAlias"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/protocol/{uuid}', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'null';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/protocol/{uuid}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /protocol/{uuid}`

Update an existing user

> Body parameter

```json
null
```

<h3 id="updatealias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|uuid of the alias to update|
|body|body|any|true|area parameters|

> Example responses

> 201 Response

```json
{
  "alias": "mediaServer",
  "group": "Peering",
  "ip": "192.168.10.20",
  "ipobject": "string",
  "ipv6": false,
  "mask": 32,
  "port": 5060,
  "servertype": "Sansay-Peering",
  "shardid": "allports",
  "status": true,
  "type": 0,
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 1611662524002
}
```

<h3 id="updatealias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AliasStruct|[AliasStruct](#schemaaliasstruct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### DeleteProtocol

<a id="opIdDeleteProtocol"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/protocol/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/protocol/{uuid}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /protocol/{uuid}`

Update an existing user

<h3 id="deleteprotocol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|uuid of the alias to delete|

> Example responses

> 201 Response

```json
{
  "alias": "mediaServer",
  "group": "Peering",
  "ip": "192.168.10.20",
  "ipobject": "string",
  "ipv6": false,
  "mask": 32,
  "port": 5060,
  "servertype": "Sansay-Peering",
  "shardid": "allports",
  "status": true,
  "type": 0,
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 1611662524002
}
```

<h3 id="deleteprotocol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AliasStruct|[AliasStruct](#schemaaliasstruct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-proxy">Proxy</h1>

### grafanaDashboard

<a id="opIdgrafanaDashboard"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/proxy/grafana/dashboards/uid/{uid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/proxy/grafana/dashboards/uid/{uid}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /proxy/grafana/dashboards/uid/{uid}`

Returns data based upon filtered json

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="grafanadashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### grafanaFolders

<a id="opIdgrafanaFolders"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/proxy/grafana/folders', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/proxy/grafana/folders',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /proxy/grafana/folders`

Returns data based upon filtered json

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="grafanafolders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### grafanaOrg

<a id="opIdgrafanaOrg"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/proxy/grafana/org', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/proxy/grafana/org',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /proxy/grafana/org`

Returns data based upon filtered json

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="grafanaorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### grafanaRequest

<a id="opIdgrafanaRequest"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/proxy/grafana/request/d/{uid}/{param}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/proxy/grafana/request/d/{uid}/{param}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /proxy/grafana/request/d/{uid}/{param}`

Returns data based upon filtered json

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="grafanarequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### grafanaSearch

<a id="opIdgrafanaSearch"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/proxy/grafana/search/{uid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/proxy/grafana/search/{uid}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /proxy/grafana/search/{uid}`

Returns data based upon filtered json

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="grafanasearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### grafana

<a id="opIdgrafana"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/proxy/grafana/status', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/proxy/grafana/status',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /proxy/grafana/status`

Returns data based upon filtered json

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="grafana-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### grafanaUrl

<a id="opIdgrafanaUrl"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/proxy/grafana/url', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/proxy/grafana/url',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /proxy/grafana/url`

Returns data based upon filtered json

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="grafanaurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-scripts">Scripts</h1>

### ListScriptData

<a id="opIdListScriptData"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/script', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/script',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /script`

Returns data from server

> Example responses

> 201 Response

```json
{
  "data": "verizon",
  "hep_alias": "string",
  "hepid": 0,
  "partid": 0,
  "profile": "string",
  "status": true,
  "type": "javascript / lua",
  "uuid": "string",
  "version": 0
}
```

<h3 id="listscriptdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ScriptDataStruct|[ScriptDataStruct](#schemascriptdatastruct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AddScriptData

<a id="opIdAddScriptData"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/script', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "data": "verizon",
  "hep_alias": "string",
  "hepid": 0,
  "partid": 0,
  "profile": "string",
  "status": true,
  "type": "javascript / lua",
  "uuid": "string",
  "version": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/script',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /script`

Adds Scripts to system

> Body parameter

```json
{
  "data": "verizon",
  "hep_alias": "string",
  "hepid": 0,
  "partid": 0,
  "profile": "string",
  "status": true,
  "type": "javascript / lua",
  "uuid": "string",
  "version": 0
}
```

<h3 id="addscriptdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScriptDataStruct](#schemascriptdatastruct)|true|ScriptDataStruct parameters|

> Example responses

> 201 Response

```json
{
  "scope": "b9f6q23a-0bde-41ce-cd36-da3dbc17ea12",
  "token": "JWT Token",
  "user": {
    "admin": true,
    "force_password": true
  }
}
```

<h3 id="addscriptdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|UserLoginSuccessResponse|[UserLoginSuccessResponse](#schemauserloginsuccessresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UpdateScriptData

<a id="opIdUpdateScriptData"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/script/{uuid}', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'null';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/script/{uuid}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /script/{uuid}`

Update an existing user

> Body parameter

```json
null
```

<h3 id="updatescriptdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|uuid of the Scripts to update|
|body|body|any|true|area parameters|

> Example responses

> 201 Response

```json
{
  "data": "verizon",
  "hep_alias": "string",
  "hepid": 0,
  "partid": 0,
  "profile": "string",
  "status": true,
  "type": "javascript / lua",
  "uuid": "string",
  "version": 0
}
```

<h3 id="updatescriptdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ScriptDataStruct|[ScriptDataStruct](#schemascriptdatastruct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### DeleteScriptData

<a id="opIdDeleteScriptData"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/script/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/script/{uuid}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /script/{uuid}`

Update an existing user

<h3 id="deletescriptdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|uuid of the Scripts to delete|

> Example responses

> 201 Response

```json
{
  "data": "verizon",
  "hep_alias": "string",
  "hepid": 0,
  "partid": 0,
  "profile": "string",
  "status": true,
  "type": "javascript / lua",
  "uuid": "string",
  "version": 0
}
```

<h3 id="deletescriptdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ScriptDataStruct|[ScriptDataStruct](#schemascriptdatastruct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-remote">Remote</h1>

### remoteData

<a id="opIdremoteData"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/search/remote/data', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "limit": 0,
    "search": "string",
    "server": "string",
    "timezone": {}
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/search/remote/data',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /search/remote/data`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "limit": 0,
    "search": "string",
    "server": "string",
    "timezone": {}
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

<h3 id="remotedata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RemoteObject](#schemaremoteobject)|true|RemoteObject parameters|

> Example responses

> 200 Response

```json
{
  "Data": [
    {
      "custom_1": "string",
      "custom_2": "{\"duration\":\"0\",\"from_user\":\"1201\",\"ruri_user\":\"102110112384797001\",status\":\"8\",\"type\":\"call\"}",
      "id": 1,
      "micro_ts": 1634081796154
    }
  ]
}
```

<h3 id="remotedata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|RemoteResponseData|[RemoteResponseData](#schemaremoteresponsedata)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### remoteLabel

<a id="opIdremoteLabel"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/search/remote/label', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/search/remote/label',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /search/remote/label`

Returns data based upon filtered json

> Example responses

> 201 Response

```json
[
  "string"
]
```

<h3 id="remotelabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|RemoteLabels|[RemoteLabels](#schemaremotelabels)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### remoteStatus

<a id="opIdremoteStatus"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/search/remote/status', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/search/remote/status',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /search/remote/status`

Returns data based upon filtered json

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="remotestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### remoteValues

<a id="opIdremoteValues"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/search/remote/values', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/search/remote/values',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /search/remote/values`

Returns data based upon filtered json

> Example responses

> 201 Response

```json
[
  "string"
]
```

<h3 id="remotevalues-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|RemoteValues|[RemoteValues](#schemaremotevalues)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-share">Share</h1>

### searchCallReportDtmf

<a id="opIdsearchCallReportDtmf"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json',
  'Auth-Token': undefined
}

r = requests.post('https://api.hepic/api/v3/share/call/report/dtmf/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json',
  'Auth-Token':undefined
};

fetch('https://api.hepic/api/v3/share/call/report/dtmf/{uuid}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /share/call/report/dtmf/{uuid}`

Returns log data based upon filtered json

<h3 id="searchcallreportdtmf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Auth-Token|header|undefined|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="searchcallreportdtmf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="success">
This operation does not require authentication
</aside>

### searchCallReportLogs

<a id="opIdsearchCallReportLogs"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json',
  'Auth-Token': undefined
}

r = requests.post('https://api.hepic/api/v3/share/call/report/log/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json',
  'Auth-Token':undefined
};

fetch('https://api.hepic/api/v3/share/call/report/log/{uuid}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /share/call/report/log/{uuid}`

Returns log data based upon filtered json

<h3 id="searchcallreportlogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Auth-Token|header|undefined|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="searchcallreportlogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="success">
This operation does not require authentication
</aside>

### searchCallTransaction

<a id="opIdsearchCallTransaction"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json',
  'Auth-Token': undefined
}

r = requests.post('https://api.hepic/api/v3/share/call/transaction/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json',
  'Auth-Token':undefined
};

fetch('https://api.hepic/api/v3/share/call/transaction/{uuid}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /share/call/transaction/{uuid}`

Returns transaction data based upon filtered json

<h3 id="searchcalltransaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Auth-Token|header|undefined|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="searchcalltransaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="success">
This operation does not require authentication
</aside>

### searchCallMessagesPcap

<a id="opIdsearchCallMessagesPcap"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json',
  'Auth-Token': undefined
}

r = requests.post('https://api.hepic/api/v3/share/export/call/messages/pcap/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json',
  'Auth-Token':undefined
};

fetch('https://api.hepic/api/v3/share/export/call/messages/pcap/{uuid}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /share/export/call/messages/pcap/{uuid}`

Returns pcap data based upon filtered json

<h3 id="searchcallmessagespcap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Auth-Token|header|undefined|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="searchcallmessagespcap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="success">
This operation does not require authentication
</aside>

### searchMessagesText

<a id="opIdsearchMessagesText"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json',
  'Auth-Token': undefined
}

r = requests.post('https://api.hepic/api/v3/share/export/call/messages/text/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json',
  'Auth-Token':undefined
};

fetch('https://api.hepic/api/v3/share/export/call/messages/text/{uuid}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /share/export/call/messages/text/{uuid}`

Returns text data based upon filtered json

<h3 id="searchmessagestext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Auth-Token|header|undefined|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="searchmessagestext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="success">
This operation does not require authentication
</aside>

### ipAliasLookup

<a id="opIdipAliasLookup"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/share/ipalias/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/share/ipalias/{uuid}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /share/ipalias/{uuid}`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="ipaliaslookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### searchMappingProtocol

<a id="opIdsearchMappingProtocol"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/share/mapping/protocol/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/share/mapping/protocol/{uuid}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /share/mapping/protocol/{uuid}`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="searchmappingprotocol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### searchCalMessageByUuuid

<a id="opIdsearchCalMessageByUuuid"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json',
  'Auth-Token': undefined
}

r = requests.post('https://api.hepic/api/v3/share/search/call/message/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json',
  'Auth-Token':undefined
};

fetch('https://api.hepic/api/v3/share/search/call/message/{uuid}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /share/search/call/message/{uuid}`

Returns data based upon filtered json

<h3 id="searchcalmessagebyuuuid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Auth-Token|header|undefined|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="searchcalmessagebyuuuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hepic-api-documentation-statistics">Statistics</h1>

### statsDB

<a id="opIdstatsDB"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/statistic/_db', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/statistic/_db',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /statistic/_db`

Returns data based upon filtered json

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="statsdb-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### statsMeasurement

<a id="opIdstatsMeasurement"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/statistic/_measurements/{dbid}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "Search": {
      "database": "string"
    },
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/statistic/_measurements/{dbid}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /statistic/_measurements/{dbid}`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "Search": {
      "database": "string"
    },
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

<h3 id="statsmeasurement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StatisticSearchObject](#schemastatisticsearchobject)|true|StatisticSearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="statsmeasurement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### statsMetrics

<a id="opIdstatsMetrics"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/statistic/_metrics', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "query": [
      {
        "database": "string",
        "main": "string",
        "rawquery": "string",
        "retention": "string",
        "tag": [
          "string"
        ],
        "type": [
          "string"
        ]
      }
    ],
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/statistic/_metrics',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /statistic/_metrics`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "query": [
      {
        "database": "string",
        "main": "string",
        "rawquery": "string",
        "retention": "string",
        "tag": [
          "string"
        ],
        "type": [
          "string"
        ]
      }
    ],
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

<h3 id="statsmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StatisticObject](#schemastatisticobject)|true|StatisticObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="statsmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### statsRetention

<a id="opIdstatsRetention"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/statistic/_retentions', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "Search": {
      "database": "string"
    },
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/statistic/_retentions',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /statistic/_retentions`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "Search": {
      "database": "string"
    },
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

<h3 id="statsretention-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StatisticSearchObject](#schemastatisticsearchobject)|true|StatisticSearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="statsretention-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### statsTags

<a id="opIdstatsTags"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/statistic/_tags', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "query": [
      {
        "database": "string",
        "main": "string",
        "rawquery": "string",
        "retention": "string",
        "tag": [
          "string"
        ],
        "type": [
          "string"
        ]
      }
    ],
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/statistic/_tags',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /statistic/_tags`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "query": [
      {
        "database": "string",
        "main": "string",
        "rawquery": "string",
        "retention": "string",
        "tag": [
          "string"
        ],
        "type": [
          "string"
        ]
      }
    ],
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

<h3 id="statstags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StatisticObject](#schemastatisticobject)|true|StatisticObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="statstags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### infoDatabase

<a id="opIdinfoDatabase"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json',
  'Auth-Token': undefined
}

r = requests.post('https://api.hepic/api/v3/statistic/database/info', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json',
  'Auth-Token':undefined
};

fetch('https://api.hepic/api/v3/statistic/database/info',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /statistic/database/info`

Returns log data based upon filtered json

<h3 id="infodatabase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Auth-Token|header|undefined|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="infodatabase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="success">
This operation does not require authentication
</aside>

### dataSearch

<a id="opIddataSearch"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/statistic/data', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "param": {
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "query": [
      {
        "database": "string",
        "main": "string",
        "rawquery": "string",
        "retention": "string",
        "tag": [
          "string"
        ],
        "type": [
          "string"
        ]
      }
    ],
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/statistic/data',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /statistic/data`

Returns data based upon filtered json

> Body parameter

```json
{
  "param": {
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "query": [
      {
        "database": "string",
        "main": "string",
        "rawquery": "string",
        "retention": "string",
        "tag": [
          "string"
        ],
        "type": [
          "string"
        ]
      }
    ],
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}
```

<h3 id="datasearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StatisticObject](#schemastatisticobject)|true|StatisticObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="datasearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-token">Token</h1>

### GetToken

<a id="opIdGetToken"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/token/auth', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/token/auth',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /token/auth`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="gettoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AddAuthToken

<a id="opIdAddAuthToken"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/token/auth', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "active": true,
  "create_date": "2019-08-24T14:15:22Z",
  "creator_guid": "string",
  "expire_date": "2019-08-24T14:15:22Z",
  "guid": "string",
  "ip_address": "string",
  "lastusage_date": "2019-08-24T14:15:22Z",
  "limit_calls": 0,
  "name": "string",
  "usage_calls": 0,
  "user_object": {},
  "usergroup": "string",
  "version": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/token/auth',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /token/auth`

Returns data from server

> Body parameter

```json
{
  "active": true,
  "create_date": "2019-08-24T14:15:22Z",
  "creator_guid": "string",
  "expire_date": "2019-08-24T14:15:22Z",
  "guid": "string",
  "ip_address": "string",
  "lastusage_date": "2019-08-24T14:15:22Z",
  "limit_calls": 0,
  "name": "string",
  "usage_calls": 0,
  "user_object": {},
  "usergroup": "string",
  "version": 0
}
```

<h3 id="addauthtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TableAuthToken](#schematableauthtoken)|true|TableAuthToken parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="addauthtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### GetTokenAgainstUUID

<a id="opIdGetTokenAgainstUUID"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/token/auth/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/token/auth/{uuid}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /token/auth/{uuid}`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="gettokenagainstuuid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UpdateToken

<a id="opIdUpdateToken"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/token/auth/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/token/auth/{uuid}',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /token/auth/{uuid}`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="updatetoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### DeleteToken

<a id="opIdDeleteToken"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/token/auth/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/token/auth/{uuid}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /token/auth/{uuid}`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="deletetoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-troubelshooting">Troubelshooting</h1>

### DoActionForLog

<a id="opIdDoActionForLog"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/troubleshooting/log/:type/:action', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "data": [
    {
      "aliasDst": "string",
      "aliasSrc": "string",
      "create_date": 0,
      "destination": 0,
      "dstHost": "string",
      "dstId": "string",
      "dstIp": "string",
      "dstPort": 0.1,
      "id": 0.1,
      "method": "string",
      "method_text": "string",
      "micro_ts": 0,
      "msg_color": "string",
      "prot": 0.1,
      "protocol": 0.1,
      "ruri_user": "string",
      "sid": "string",
      "srcHost": "string",
      "srcId": "string",
      "srcIp": "string",
      "srcPort": 0.1,
      "table": "string"
    }
  ],
  "keys": [
    "callid",
    "srcIp",
    "srcPort"
  ],
  "total": 45
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/troubleshooting/log/:type/:action',
{
  method: 'GET',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /troubleshooting/log/:type/:action`

Returns data based upon filtered json

> Body parameter

```json
{
  "data": [
    {
      "aliasDst": "string",
      "aliasSrc": "string",
      "create_date": 0,
      "destination": 0,
      "dstHost": "string",
      "dstId": "string",
      "dstIp": "string",
      "dstPort": 0.1,
      "id": 0.1,
      "method": "string",
      "method_text": "string",
      "micro_ts": 0,
      "msg_color": "string",
      "prot": 0.1,
      "protocol": 0.1,
      "ruri_user": "string",
      "sid": "string",
      "srcHost": "string",
      "srcId": "string",
      "srcIp": "string",
      "srcPort": 0.1,
      "table": "string"
    }
  ],
  "keys": [
    "callid",
    "srcIp",
    "srcPort"
  ],
  "total": 45
}
```

<h3 id="doactionforlog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchCallData](#schemasearchcalldata)|true|SearchObject parameters|

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="doactionforlog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-settings">Settings</h1>

### ListSettings

<a id="opIdListSettings"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/user/settings/{category}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/user/settings/{category}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /user/settings/{category}`

Returns the list of settings

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}
```

<h3 id="listsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|ListUsers|[ListUsers](#schemalistusers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### AddUserSettings

<a id="opIdAddUserSettings"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://api.hepic/api/v3/user/settings', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/user/settings',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /user/settings`

Adds user settings to system

> Body parameter

```json
false
```

> Example responses

> 201 Response

```json
{
  "scope": "b9f6q23a-0bde-41ce-cd36-da3dbc17ea12",
  "token": "JWT Token",
  "user": {
    "admin": true,
    "force_password": true
  }
}
```

<h3 id="addusersettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|UserLoginSuccessResponse|[UserLoginSuccessResponse](#schemauserloginsuccessresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### UpdateSettings

<a id="opIdUpdateSettings"></a>

> Code samples

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('https://api.hepic/api/v3/user/settings/{uuid}', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'null';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/user/settings/{uuid}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /user/settings/{uuid}`

Update an existing user

> Body parameter

```json
null
```

<h3 id="updatesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|uuid of the alias to update|
|body|body|any|true|area parameters|

> Example responses

> 201 Response

```json
{
  "alias": "mediaServer",
  "group": "Peering",
  "ip": "192.168.10.20",
  "ipobject": "string",
  "ipv6": false,
  "mask": 32,
  "port": 5060,
  "servertype": "Sansay-Peering",
  "shardid": "allports",
  "status": true,
  "type": 0,
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 1611662524002
}
```

<h3 id="updatesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AliasStruct|[AliasStruct](#schemaaliasstruct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

### DeleteSettings

<a id="opIdDeleteSettings"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('https://api.hepic/api/v3/user/settings/{uuid}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/user/settings/{uuid}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /user/settings/{uuid}`

Update an existing user

<h3 id="deletesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uuid|path|string|true|uuid of the alias to delete|

> Example responses

> 201 Response

```json
{
  "alias": "mediaServer",
  "group": "Peering",
  "ip": "192.168.10.20",
  "ipobject": "string",
  "ipv6": false,
  "mask": 32,
  "port": 5060,
  "servertype": "Sansay-Peering",
  "shardid": "allports",
  "status": true,
  "type": 0,
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 1611662524002
}
```

<h3 id="deletesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|AliasStruct|[AliasStruct](#schemaaliasstruct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

<h1 id="hepic-api-documentation-version">Version</h1>

### ListMapping

<a id="opIdListMapping"></a>

> Code samples

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('https://api.hepic/api/v3/version/ui/info', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('https://api.hepic/api/v3/version/ui/info',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /version/ui/info`

Returns data from server

> Example responses

> 201 Response

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}
```

<h3 id="listmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SuccessResponse|[SuccessResponse](#schemasuccessresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|FailureResponse|[FailureResponse](#schemafailureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, JWT, None ( Scopes: apiKey ), None ( Scopes: Authorization ), None ( Scopes: header ), ApiKeyAuth, None ( Scopes: apiKey ), None ( Scopes: header ), None ( Scopes: Auth-Token )
</aside>

# Schemas

<h2 id="tocS_AdminTables">AdminTables</h2>
<!-- backwards compatibility -->
<a id="schemaadmintables"></a>
<a id="schema_AdminTables"></a>
<a id="tocSadmintables"></a>
<a id="tocsadmintables"></a>

```json
{
  "count": 0,
  "data": [
    "alias",
    "users",
    "global_settings"
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|exmaple: 7|
|data|[string]|false|none|none|

<h2 id="tocS_AgentLocationCreateSuccessResponse">AgentLocationCreateSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemaagentlocationcreatesuccessresponse"></a>
<a id="schema_AgentLocationCreateSuccessResponse"></a>
<a id="tocSagentlocationcreatesuccessresponse"></a>
<a id="tocsagentlocationcreatesuccessresponse"></a>

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully created AgentLocation settings"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_AgentLocationDeleteSuccessResponse">AgentLocationDeleteSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemaagentlocationdeletesuccessresponse"></a>
<a id="schema_AgentLocationDeleteSuccessResponse"></a>
<a id="tocSagentlocationdeletesuccessresponse"></a>
<a id="tocsagentlocationdeletesuccessresponse"></a>

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully deleted AgentLocation settings"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_AgentLocationUpdateSuccessResponse">AgentLocationUpdateSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemaagentlocationupdatesuccessresponse"></a>
<a id="schema_AgentLocationUpdateSuccessResponse"></a>
<a id="tocSagentlocationupdatesuccessresponse"></a>
<a id="tocsagentlocationupdatesuccessresponse"></a>

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully updated AgentLocation settings"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_AgentsLocation">AgentsLocation</h2>
<!-- backwards compatibility -->
<a id="schemaagentslocation"></a>
<a id="schema_AgentsLocation"></a>
<a id="tocSagentslocation"></a>
<a id="tocsagentslocation"></a>

```json
{
  "active": true,
  "create_date": "2019-08-24T14:15:22Z",
  "expire_date": "2019-08-24T14:15:22Z",
  "gid": 0,
  "host": "string",
  "node": "string",
  "path": "string",
  "port": 0,
  "protocol": "string",
  "ttl": 0,
  "type": "string",
  "uuid": "string",
  "version": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|create_date|string(date-time)|false|none|none|
|expire_date|string(date-time)|false|none|none|
|gid|integer(uint32)|false|none|none|
|host|string|false|none|none|
|node|string|false|none|none|
|path|string|false|none|none|
|port|integer(uint16)|false|none|none|
|protocol|string|false|none|none|
|ttl|integer(uint32)|false|none|none|
|type|string|false|none|none|
|uuid|string|false|none|none|
|version|integer(uint64)|false|none|none|

<h2 id="tocS_AgentsLocationList">AgentsLocationList</h2>
<!-- backwards compatibility -->
<a id="schemaagentslocationlist"></a>
<a id="schema_AgentsLocationList"></a>
<a id="tocSagentslocationlist"></a>
<a id="tocsagentslocationlist"></a>

```json
{
  "Data": [
    {
      "active": true,
      "create_date": "2019-08-24T14:15:22Z",
      "expire_date": "2019-08-24T14:15:22Z",
      "gid": 0,
      "host": "string",
      "node": "string",
      "path": "string",
      "port": 0,
      "protocol": "string",
      "ttl": 0,
      "type": "string",
      "uuid": "string",
      "version": 0
    }
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[[AgentsLocation](#schemaagentslocation)]|false|none|none|

<h2 id="tocS_AliasMapStruct">AliasMapStruct</h2>
<!-- backwards compatibility -->
<a id="schemaaliasmapstruct"></a>
<a id="schema_AliasMapStruct"></a>
<a id="tocSaliasmapstruct"></a>
<a id="tocsaliasmapstruct"></a>

```json
{
  "alias": "0",
  "firstipv4": [
    0
  ],
  "firstipv6": [
    0
  ],
  "group": "string",
  "ip": "192.168.10.20",
  "ipobject": {},
  "ipv6": true,
  "lastbinaryipv4": 5060,
  "lastbinaryipv6": {},
  "lastipv4": [
    0
  ],
  "lastipv6": [
    0
  ],
  "mask": 32,
  "port": 5060,
  "servertype": "string",
  "type": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|true|none|none|
|firstipv4|[IP](#schemaip)|true|none|Note that in this documentation, referring to an<br>IP address as an IPv4 address or an IPv6 address<br>is a semantic property of the address, not just the<br>length of the byte slice: a 16-byte slice can still<br>be an IPv4 address.|
|firstipv6|[IP](#schemaip)|true|none|Note that in this documentation, referring to an<br>IP address as an IPv4 address or an IPv6 address<br>is a semantic property of the address, not just the<br>length of the byte slice: a 16-byte slice can still<br>be an IPv4 address.|
|group|string|false|none|none|
|ip|string|true|none|none|
|ipobject|[JSONText](#schemajsontext)|true|none|none|
|ipv6|boolean|false|none|none|
|lastbinaryipv4|integer(uint32)|true|none|none|
|lastbinaryipv6|[Int](#schemaint)|true|none|Operations always take pointer arguments (*Int) rather<br>than Int values, and each unique Int value requires<br>its own unique *Int pointer. To "copy" an Int value,<br>an existing (or newly allocated) Int must be set to<br>a new value using the Int.Set method; shallow copies<br>of Ints are not supported and may lead to errors.|
|lastipv4|[IP](#schemaip)|true|none|Note that in this documentation, referring to an<br>IP address as an IPv4 address or an IPv6 address<br>is a semantic property of the address, not just the<br>length of the byte slice: a 16-byte slice can still<br>be an IPv4 address.|
|lastipv6|[IP](#schemaip)|true|none|Note that in this documentation, referring to an<br>IP address as an IPv4 address or an IPv6 address<br>is a semantic property of the address, not just the<br>length of the byte slice: a 16-byte slice can still<br>be an IPv4 address.|
|mask|integer(uint16)|true|none|none|
|port|integer(uint16)|true|none|none|
|servertype|string|false|none|server type|
|type|integer(uint32)|false|none|none|

<h2 id="tocS_AliasResponse">AliasResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaliasresponse"></a>
<a id="schema_AliasResponse"></a>
<a id="tocSaliasresponse"></a>
<a id="tocsaliasresponse"></a>

```json
{
  "metadata_modification_time": 1614606829,
  "total_bytes": 0,
  "total_rows": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata_modification_time|integer(uint32)|false|none|none|
|total_bytes|integer(uint32)|false|none|none|
|total_rows|integer(uint32)|false|none|none|

<h2 id="tocS_AliasStruct">AliasStruct</h2>
<!-- backwards compatibility -->
<a id="schemaaliasstruct"></a>
<a id="schema_AliasStruct"></a>
<a id="tocSaliasstruct"></a>
<a id="tocsaliasstruct"></a>

```json
{
  "alias": "mediaServer",
  "group": "Peering",
  "ip": "192.168.10.20",
  "ipobject": "string",
  "ipv6": false,
  "mask": 32,
  "port": 5060,
  "servertype": "Sansay-Peering",
  "shardid": "allports",
  "status": true,
  "type": 0,
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 1611662524002
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|true|none|none|
|group|string|true|none|group this server belongs to|
|ip|string|true|none|none|
|ipobject|string(binary)|false|none|Ip object to be appended to data|
|ipv6|boolean|false|none|if entry is for ipv6|
|mask|integer(uint16)|true|none|none|
|port|integer(uint16)|true|none|none|
|servertype|string|true|none|servertype this server belongs to|
|shardid|string|false|none|ShardID|
|status|boolean|true|none|status of the alias|
|type|integer(uint32)|true|none|none|
|uuid|string|true|none|should be a unique value representing user|
|version|integer(uint64)|false|none|Version|

<h2 id="tocS_AliasSwaggerStruct">AliasSwaggerStruct</h2>
<!-- backwards compatibility -->
<a id="schemaaliasswaggerstruct"></a>
<a id="schema_AliasSwaggerStruct"></a>
<a id="tocSaliasswaggerstruct"></a>
<a id="tocsaliasswaggerstruct"></a>

```json
{
  "alias": "mediaServer",
  "group": "Peering",
  "ip": "192.168.10.20",
  "ipobject": {
    "alias": "mediaServer",
    "color": {
      "background": "#c8c8c8",
      "border": "#000000",
      "font": "#000000"
    },
    "group": "Peering",
    "image": "./img/gateways/phone.png",
    "ip": "192.168.10.20",
    "ipv6": false,
    "mask": 32,
    "port": 5060,
    "servertype": "Sansay-Peering",
    "shardid": "allports",
    "status": true,
    "type": 0
  },
  "ipv6": false,
  "mask": 32,
  "port": 5060,
  "servertype": "Sansay-Peering",
  "shardid": "allports",
  "status": true,
  "type": 0,
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 1611662524002
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|true|none|an alias for the server|
|group|string|true|none|group this server belongs to|
|ip|string|true|none|none|
|ipobject|object|false|none|none|
|» alias|string|true|none|an alias for the server|
|» color|object|false|none|none|
|»» background|string|true|none|background color to choose|
|»» border|string|true|none|background color to choose|
|»» font|string|true|none|font to choose|
|» group|string|true|none|group this server belongs to|
|» image|string|true|none|image use to idenfity this server|
|» ip|string|true|none|none|
|» ipv6|boolean|false|none|if entry is for ipv6|
|» mask|integer(int64)|true|none|none|
|» port|integer(int64)|true|none|none|
|» servertype|string|true|none|servertype this server belongs to|
|» shardid|string|false|none|none|
|» status|boolean|true|none|status of the alias|
|» type|integer(int64)|true|none|none|
|ipv6|boolean|false|none|if entry is for ipv6|
|mask|integer(uint16)|true|none|none|
|port|integer(uint16)|true|none|none|
|servertype|string|true|none|servertype this server belongs to|
|shardid|string|false|none|ShardID|
|status|boolean|true|none|status of the alias|
|type|integer(uint32)|true|none|none|
|uuid|string|true|none|should be a unique value representing user|
|version|integer(uint64)|false|none|Version|

<h2 id="tocS_ArchiveResponse">ArchiveResponse</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveresponse"></a>
<a id="schema_ArchiveResponse"></a>
<a id="tocSarchiveresponse"></a>
<a id="tocsarchiveresponse"></a>

```json
{
  "File": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|File|[File](#schemafile)|false|none|none|

<h2 id="tocS_CallElement">CallElement</h2>
<!-- backwards compatibility -->
<a id="schemacallelement"></a>
<a id="schema_CallElement"></a>
<a id="tocScallelement"></a>
<a id="tocscallelement"></a>

```json
{
  "aliasDst": "string",
  "aliasSrc": "string",
  "create_date": 0,
  "destination": 0,
  "dstHost": "string",
  "dstId": "string",
  "dstIp": "string",
  "dstPort": 0.1,
  "id": 0.1,
  "method": "string",
  "method_text": "string",
  "micro_ts": 0,
  "msg_color": "string",
  "prot": 0.1,
  "protocol": 0.1,
  "ruri_user": "string",
  "sid": "string",
  "srcHost": "string",
  "srcId": "string",
  "srcIp": "string",
  "srcPort": 0.1,
  "table": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasDst|string|false|none|none|
|aliasSrc|string|false|none|none|
|create_date|integer(int64)|false|none|none|
|destination|integer(int64)|false|none|none|
|dstHost|string|false|none|none|
|dstId|string|false|none|none|
|dstIp|string|false|none|none|
|dstPort|number(double)|false|none|none|
|id|number(double)|false|none|none|
|method|string|false|none|none|
|method_text|string|false|none|none|
|micro_ts|integer(int64)|false|none|none|
|msg_color|string|false|none|none|
|prot|number(double)|false|none|none|
|protocol|number(double)|false|none|none|
|ruri_user|string|false|none|none|
|sid|string|false|none|none|
|srcHost|string|false|none|none|
|srcId|string|false|none|none|
|srcIp|string|false|none|none|
|srcPort|number(double)|false|none|none|
|table|string|false|none|none|

<h2 id="tocS_ClickhouseObject">ClickhouseObject</h2>
<!-- backwards compatibility -->
<a id="schemaclickhouseobject"></a>
<a id="schema_ClickhouseObject"></a>
<a id="tocSclickhouseobject"></a>
<a id="tocsclickhouseobject"></a>

```json
{
  "query": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|true|none|none|

<h2 id="tocS_ClickhouseRawQuery">ClickhouseRawQuery</h2>
<!-- backwards compatibility -->
<a id="schemaclickhouserawquery"></a>
<a id="schema_ClickhouseRawQuery"></a>
<a id="tocSclickhouserawquery"></a>
<a id="tocsclickhouserawquery"></a>

```json
{
  "data": {
    "property1": {
      "name": "string",
      "type": "string"
    },
    "property2": {
      "name": "string",
      "type": "string"
    }
  },
  "total": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|»» name|string|false|none|none|
|»» type|string|false|none|none|
|total|integer(int64)|false|none|none|

<h2 id="tocS_CreateUserStruct">CreateUserStruct</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserstruct"></a>
<a id="schema_CreateUserStruct"></a>
<a id="tocScreateuserstruct"></a>
<a id="tocscreateuserstruct"></a>

```json
{
  "department": "NOC",
  "email": "string",
  "firstname": "string",
  "guid": "string",
  "lastname": "string",
  "params": {},
  "partid": 10,
  "password": "string",
  "usergroup": "admin",
  "username": "string",
  "version": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|department|string|true|none|none|
|email|string|true|none|none|
|firstname|string|true|none|none|
|guid|string|false|none|none|
|lastname|string|true|none|none|
|params|[JSONText](#schemajsontext)|false|none|none|
|partid|integer(uint16)|true|none|none|
|password|string|true|none|none|
|usergroup|string|true|none|none|
|username|string|false|none|none|
|version|integer(uint64)|true|none|none|

<h2 id="tocS_DBStatLog">DBStatLog</h2>
<!-- backwards compatibility -->
<a id="schemadbstatlog"></a>
<a id="schema_DBStatLog"></a>
<a id="tocSdbstatlog"></a>
<a id="tocsdbstatlog"></a>

```json
{
  "critical": true,
  "error": "string",
  "time": "2019-08-24T14:15:22Z"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|critical|boolean|false|none|none|
|error|string|false|none|none|
|time|string(date-time)|false|none|none|

<h2 id="tocS_DBStats">DBStats</h2>
<!-- backwards compatibility -->
<a id="schemadbstats"></a>
<a id="schema_DBStats"></a>
<a id="tocSdbstats"></a>
<a id="tocsdbstats"></a>

```json
{
  "Idle": 0,
  "InUse": 0,
  "MaxIdleClosed": 0,
  "MaxIdleTimeClosed": 0,
  "MaxLifetimeClosed": 0,
  "MaxOpenConnections": 0,
  "OpenConnections": 0,
  "WaitCount": 0,
  "WaitDuration": 0
}

```

DBStats contains database statistics.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Idle|integer(int64)|false|none|none|
|InUse|integer(int64)|false|none|none|
|MaxIdleClosed|integer(int64)|false|none|none|
|MaxIdleTimeClosed|integer(int64)|false|none|none|
|MaxLifetimeClosed|integer(int64)|false|none|none|
|MaxOpenConnections|integer(int64)|false|none|none|
|OpenConnections|integer(int64)|false|none|Pool Status|
|WaitCount|integer(int64)|false|none|Counters|
|WaitDuration|[Duration](#schemaduration)|false|none|A Duration represents the elapsed time between two instants<br>as an int64 nanosecond count. The representation limits the<br>largest representable duration to approximately 290 years.|

<h2 id="tocS_DashboardElementList">DashboardElementList</h2>
<!-- backwards compatibility -->
<a id="schemadashboardelementlist"></a>
<a id="schema_DashboardElementList"></a>
<a id="tocSdashboardelementlist"></a>
<a id="tocsdashboardelementlist"></a>

```json
{
  "auth": "ok",
  "data": [
    {
      "cssclass": "string",
      "href": "string",
      "id": "string",
      "name": "string",
      "owner": "string",
      "param": "string",
      "shared": true,
      "type": 0,
      "weight": 0.1
    }
  ],
  "status": "ok",
  "total": 1
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth|string|false|none|none|
|data|[[DashboardElements](#schemadashboardelements)]|false|none|none|
|status|string|false|none|none|
|total|integer(int64)|false|none|none|

<h2 id="tocS_DashboardElements">DashboardElements</h2>
<!-- backwards compatibility -->
<a id="schemadashboardelements"></a>
<a id="schema_DashboardElements"></a>
<a id="tocSdashboardelements"></a>
<a id="tocsdashboardelements"></a>

```json
{
  "cssclass": "string",
  "href": "string",
  "id": "string",
  "name": "string",
  "owner": "string",
  "param": "string",
  "shared": true,
  "type": 0,
  "weight": 0.1
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cssclass|string|false|none|none|
|href|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|owner|string|false|none|none|
|param|string|false|none|none|
|shared|boolean|false|none|none|
|type|integer(int64)|false|none|none|
|weight|number(double)|false|none|none|

<h2 id="tocS_DatabaseStatistic">DatabaseStatistic</h2>
<!-- backwards compatibility -->
<a id="schemadatabasestatistic"></a>
<a id="schema_DatabaseStatistic"></a>
<a id="tocSdatabasestatistic"></a>
<a id="tocsdatabasestatistic"></a>

```json
{
  "database_name": "string",
  "database_version": "string",
  "db_error_count": 0,
  "db_error_log": [
    {
      "critical": true,
      "error": "string",
      "time": "2019-08-24T14:15:22Z"
    }
  ],
  "db_stats": {
    "Idle": 0,
    "InUse": 0,
    "MaxIdleClosed": 0,
    "MaxIdleTimeClosed": 0,
    "MaxLifetimeClosed": 0,
    "MaxOpenConnections": 0,
    "OpenConnections": 0,
    "WaitCount": 0,
    "WaitDuration": 0
  },
  "last_check": "2019-08-24T14:15:22Z",
  "last_error": "string",
  "latency_avg": 0,
  "latency_max": 0,
  "latency_min": 0,
  "online": true,
  "primary": true
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database_name|string|false|none|none|
|database_version|string|false|none|none|
|db_error_count|integer(int64)|false|none|none|
|db_error_log|[[DBStatLog](#schemadbstatlog)]|false|none|none|
|db_stats|[DBStats](#schemadbstats)|false|none|none|
|last_check|string(date-time)|false|none|none|
|last_error|string|false|none|none|
|latency_avg|integer(int64)|false|none|none|
|latency_max|integer(int64)|false|none|none|
|latency_min|integer(int64)|false|none|none|
|online|boolean|false|none|none|
|primary|boolean|false|none|none|

<h2 id="tocS_Duration">Duration</h2>
<!-- backwards compatibility -->
<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
0

```

A Duration represents the elapsed time between two instants
as an int64 nanosecond count. The representation limits the
largest representable duration to approximately 290 years.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|integer(int64)|false|none|A Duration represents the elapsed time between two instants<br>as an int64 nanosecond count. The representation limits the<br>largest representable duration to approximately 290 years.|

<h2 id="tocS_ExportActionActive">ExportActionActive</h2>
<!-- backwards compatibility -->
<a id="schemaexportactionactive"></a>
<a id="schema_ExportActionActive"></a>
<a id="tocSexportactionactive"></a>
<a id="tocsexportactionactive"></a>

```json
{
  "data": {
    "active": true
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» active|boolean|false|none|none|

<h2 id="tocS_ExportActionRTPagent">ExportActionRTPagent</h2>
<!-- backwards compatibility -->
<a id="schemaexportactionrtpagent"></a>
<a id="schema_ExportActionRTPagent"></a>
<a id="tocSexportactionrtpagent"></a>
<a id="tocsexportactionrtpagent"></a>

```json
{
  "data": {
    "message": "The backup has been created!"
  },
  "total": 1
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» message|string|false|none|none|
|total|integer(int64)|false|none|none|

<h2 id="tocS_ExportCallData">ExportCallData</h2>
<!-- backwards compatibility -->
<a id="schemaexportcalldata"></a>
<a id="schema_ExportCallData"></a>
<a id="tocSexportcalldata"></a>
<a id="tocsexportcalldata"></a>

```json
{
  "param": {
    "limit": 200,
    "location": {
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": {
        "callid": [
          "437711663849803218062147"
        ],
        "id": [
          "437711663849803218062147"
        ],
        "uuid": []
      }
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|param|object|true|none|none|
|» limit|integer(int64)|true|none|this controls the number of records to display|
|» location|object|false|none|location|
|»» node|[string]|false|none|node to search the records<br>type: array<br>items:<br>type: string|
|» orlogic|boolean|false|none|this control the type of search one can perform<br>type: boolean|
|» search|object|true|none|this control the type of search one can perform<br>type: string|
|»» 60_call_h20|object|false|none|table to be search from|
|»»» callid|[string]|true|none|callid of the message for the search from|
|»»» id|[string]|true|none|callid of the message to export|
|»»» uuid|[string]|true|none|uuid of the message|
|» timezone|object|false|none|timezone settings<br>type: object|
|»» name|string|false|none|none|
|»» value|integer(int64)|false|none|none|
|» transaction|object|false|none|none|
|» whitelist|[string]|false|none|ips to be removed from search|
|timestamp|object|false|none|this control the time range for used for search|
|» from|integer(int64)|true|none|current timestamp in milliseconds|
|» to|integer(int64)|true|none|current timestamp in milliseconds|

<h2 id="tocS_FailureResponse">FailureResponse</h2>
<!-- backwards compatibility -->
<a id="schemafailureresponse"></a>
<a id="schema_FailureResponse"></a>
<a id="tocSfailureresponse"></a>
<a id="tocsfailureresponse"></a>

```json
{
  "error": "string",
  "message": "string",
  "statuscode": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|errot|
|message|string|false|none|message|
|statuscode|integer(int64)|false|none|statuscode|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{}

```

File represents an open file descriptor.

#### Properties

*None*

<h2 id="tocS_GlobalSettingsCreateSuccessfulResponse">GlobalSettingsCreateSuccessfulResponse</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsettingscreatesuccessfulresponse"></a>
<a id="schema_GlobalSettingsCreateSuccessfulResponse"></a>
<a id="tocSglobalsettingscreatesuccessfulresponse"></a>
<a id="tocsglobalsettingscreatesuccessfulresponse"></a>

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully created GlobalSetting"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_GlobalSettingsDeleteSuccessfulResponse">GlobalSettingsDeleteSuccessfulResponse</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsettingsdeletesuccessfulresponse"></a>
<a id="schema_GlobalSettingsDeleteSuccessfulResponse"></a>
<a id="tocSglobalsettingsdeletesuccessfulresponse"></a>
<a id="tocsglobalsettingsdeletesuccessfulresponse"></a>

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully deleted GlobalSetting"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_GlobalSettingsStruct">GlobalSettingsStruct</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsettingsstruct"></a>
<a id="schema_GlobalSettingsStruct"></a>
<a id="tocSglobalsettingsstruct"></a>
<a id="tocsglobalsettingsstruct"></a>

```json
{
  "category": "string",
  "create_date": "2019-08-24T14:15:22Z",
  "data": {},
  "guid": "string",
  "param": "string",
  "partid": 0,
  "setting": {},
  "version": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|create_date|string(date-time)|false|none|none|
|data|[JSONText](#schemajsontext)|false|none|none|
|guid|string|false|none|none|
|param|string|false|none|none|
|partid|integer(uint16)|false|none|none|
|setting|[JSONText](#schemajsontext)|false|none|none|
|version|integer(uint64)|false|none|none|

<h2 id="tocS_GlobalSettingsStructList">GlobalSettingsStructList</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsettingsstructlist"></a>
<a id="schema_GlobalSettingsStructList"></a>
<a id="tocSglobalsettingsstructlist"></a>
<a id="tocsglobalsettingsstructlist"></a>

```json
{
  "count": 0,
  "data": [
    {
      "category": "string",
      "create_date": "2019-08-24T14:15:22Z",
      "data": {},
      "guid": "string",
      "param": "string",
      "partid": 0,
      "setting": {},
      "version": 0
    }
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|
|data|[[GlobalSettingsStruct](#schemaglobalsettingsstruct)]|false|none|none|

<h2 id="tocS_GlobalSettingsUpdateSuccessfulResponse">GlobalSettingsUpdateSuccessfulResponse</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsettingsupdatesuccessfulresponse"></a>
<a id="schema_GlobalSettingsUpdateSuccessfulResponse"></a>
<a id="tocSglobalsettingsupdatesuccessfulresponse"></a>
<a id="tocsglobalsettingsupdatesuccessfulresponse"></a>

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully updated GlobalSetting"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_HepsubCreateSuccessResponse">HepsubCreateSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemahepsubcreatesuccessresponse"></a>
<a id="schema_HepsubCreateSuccessResponse"></a>
<a id="tocShepsubcreatesuccessresponse"></a>
<a id="tocshepsubcreatesuccessresponse"></a>

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully created hepsub settings"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_HepsubDeleteSuccessResponse">HepsubDeleteSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemahepsubdeletesuccessresponse"></a>
<a id="schema_HepsubDeleteSuccessResponse"></a>
<a id="tocShepsubdeletesuccessresponse"></a>
<a id="tocshepsubdeletesuccessresponse"></a>

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully deleted hepsub settings"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_HepsubSchema">HepsubSchema</h2>
<!-- backwards compatibility -->
<a id="schemahepsubschema"></a>
<a id="schema_HepsubSchema"></a>
<a id="tocShepsubschema"></a>
<a id="tocshepsubschema"></a>

```json
{
  "create_date": "2020-10-20T21:15:45+02:00",
  "guid": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "hep_alias": "SIP",
  "hepid": 1,
  "mapping": {},
  "profile": "call",
  "version": 1603221345489
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_date|string(date-time)|false|none|none|
|guid|string|false|none|none|
|hep_alias|string|false|none|none|
|hepid|integer(uint16)|false|none|none|
|mapping|[JSONText](#schemajsontext)|false|none|none|
|profile|string|false|none|none|
|version|integer(uint64)|false|none|none|

<h2 id="tocS_HepsubSchemaList">HepsubSchemaList</h2>
<!-- backwards compatibility -->
<a id="schemahepsubschemalist"></a>
<a id="schema_HepsubSchemaList"></a>
<a id="tocShepsubschemalist"></a>
<a id="tocshepsubschemalist"></a>

```json
{
  "count": 0,
  "data": [
    {
      "create_date": "2020-10-20T21:15:45+02:00",
      "guid": "4b855914-ca3d-4562-8563-f2b660fe2636",
      "hep_alias": "SIP",
      "hepid": 1,
      "mapping": {},
      "profile": "call",
      "version": 1603221345489
    }
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|
|data|[[HepsubSchema](#schemahepsubschema)]|false|none|none|

<h2 id="tocS_HepsubUpdateSuccessResponse">HepsubUpdateSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemahepsubupdatesuccessresponse"></a>
<a id="schema_HepsubUpdateSuccessResponse"></a>
<a id="tocShepsubupdatesuccessresponse"></a>
<a id="tocshepsubupdatesuccessresponse"></a>

```json
{
  "data": "4b855914-ca3d-4562-8563-f2b660fe2636",
  "message": "successfully updated hepsub settings"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_IP">IP</h2>
<!-- backwards compatibility -->
<a id="schemaip"></a>
<a id="schema_IP"></a>
<a id="tocSip"></a>
<a id="tocsip"></a>

```json
[
  0
]

```

An IP is a single IP address, a slice of bytes.
Functions in this package accept either 4-byte (IPv4)
or 16-byte (IPv6) slices as input.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|An IP is a single IP address, a slice of bytes.
Functions in this package accept either 4-byte (IPv4)
or 16-byte (IPv6) slices as input.|[integer]|false|none|Note that in this documentation, referring to an<br>IP address as an IPv4 address or an IPv6 address<br>is a semantic property of the address, not just the<br>length of the byte slice: a 16-byte slice can still<br>be an IPv4 address.|

<h2 id="tocS_IPAliasFileDownload">IPAliasFileDownload</h2>
<!-- backwards compatibility -->
<a id="schemaipaliasfiledownload"></a>
<a id="schema_IPAliasFileDownload"></a>
<a id="tocSipaliasfiledownload"></a>
<a id="tocsipaliasfiledownload"></a>

```json
{
  "File": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|File|[File](#schemafile)|false|none|none|

<h2 id="tocS_IPAliasFileUpload">IPAliasFileUpload</h2>
<!-- backwards compatibility -->
<a id="schemaipaliasfileupload"></a>
<a id="schema_IPAliasFileUpload"></a>
<a id="tocSipaliasfileupload"></a>
<a id="tocsipaliasfileupload"></a>

```json
{
  "File": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|File|[File](#schemafile)|false|none|none|

<h2 id="tocS_Int">Int</h2>
<!-- backwards compatibility -->
<a id="schemaint"></a>
<a id="schema_Int"></a>
<a id="tocSint"></a>
<a id="tocsint"></a>

```json
{}

```

An Int represents a signed multi-precision integer.
The zero value for an Int represents the value 0.

#### Properties

*None*

<h2 id="tocS_InterceptionAgentRequest">InterceptionAgentRequest</h2>
<!-- backwards compatibility -->
<a id="schemainterceptionagentrequest"></a>
<a id="schema_InterceptionAgentRequest"></a>
<a id="tocSinterceptionagentrequest"></a>
<a id="tocsinterceptionagentrequest"></a>

```json
{
  "LIID": 0,
  "deleted": true,
  "description": "string",
  "gid": 0,
  "number": "string",
  "reseller_id": 0,
  "search_callee": "string",
  "search_caller": "string",
  "search_ip": "string",
  "sip_domain": "string",
  "sip_username": "string",
  "ts_create": 0,
  "ts_modify": 0,
  "ts_start": 0,
  "ts_stop": 0,
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LIID|integer(uint32)|false|none|LIID|
|deleted|boolean|false|none|deleted|
|description|string|false|none|description|
|gid|integer(uint32)|false|none|gid|
|number|string|false|none|Number|
|reseller_id|integer(uint32)|false|none|reseller|
|search_callee|string|false|none|Callee|
|search_caller|string|false|none|Callee|
|search_ip|string|false|none|Callee|
|sip_domain|string|false|none|SIP Domain|
|sip_username|string|false|none|SIP Username|
|ts_create|integer(int64)|true|none|none|
|ts_modify|integer(int64)|true|none|none|
|ts_start|integer(int64)|true|none|none|
|ts_stop|integer(int64)|true|none|none|
|uuid|string|true|none|should be a unique value representing user|

<h2 id="tocS_InterceptionsStruct">InterceptionsStruct</h2>
<!-- backwards compatibility -->
<a id="schemainterceptionsstruct"></a>
<a id="schema_InterceptionsStruct"></a>
<a id="tocSinterceptionsstruct"></a>
<a id="tocsinterceptionsstruct"></a>

```json
{
  "create_date": "2019-08-24T14:15:22Z",
  "delivery": {},
  "description": "string",
  "gid": 0,
  "liid": 0,
  "modify_date": "2019-08-24T14:15:22Z",
  "search_callee": "string",
  "search_caller": "string",
  "search_ip": "string",
  "start_date": "2019-08-24T14:15:22Z",
  "status": true,
  "stop_date": "2019-08-24T14:15:22Z",
  "uuid": "e71771a2-1ea0-498f-8d27-391713e10664",
  "version": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_date|string(date-time)|true|none|none|
|delivery|[JSONText](#schemajsontext)|true|none|none|
|description|string|false|none|description|
|gid|integer(uint32)|false|none|gid|
|liid|integer(uint32)|false|none|LIID|
|modify_date|string(date-time)|false|none|required:|
|search_callee|string|false|none|Callee|
|search_caller|string|false|none|Callee|
|search_ip|string|false|none|Callee|
|start_date|string(date-time)|false|none|required:|
|status|boolean|false|none|none|
|stop_date|string(date-time)|false|none|required:|
|uuid|string|true|none|should be a unique value representing user|
|version|integer(uint64)|false|none|Version|

<h2 id="tocS_JSONText">JSONText</h2>
<!-- backwards compatibility -->
<a id="schemajsontext"></a>
<a id="schema_JSONText"></a>
<a id="tocSjsontext"></a>
<a id="tocsjsontext"></a>

```json
{}

```

#### Properties

*None*

<h2 id="tocS_LabelData">LabelData</h2>
<!-- backwards compatibility -->
<a id="schemalabeldata"></a>
<a id="schema_LabelData"></a>
<a id="tocSlabeldata"></a>
<a id="tocslabeldata"></a>

```json
{
  "entries": [
    {
      "entries": [],
      "labels": {}
    }
  ],
  "labels": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[LabelData](#schemalabeldata)]|false|none|none|
|labels|object|false|none|none|

<h2 id="tocS_LegacyAlias">LegacyAlias</h2>
<!-- backwards compatibility -->
<a id="schemalegacyalias"></a>
<a id="schema_LegacyAlias"></a>
<a id="tocSlegacyalias"></a>
<a id="tocslegacyalias"></a>

```json
{
  "Group": "string",
  "IP": "192.168.10.20",
  "IPBits": 32,
  "Port": 5060,
  "ServerType": "string",
  "ShardID": "string",
  "Type": 0,
  "ipobject": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Group|string|false|none|none|
|IP|string|true|none|none|
|IPBits|integer(uint16)|true|none|none|
|Port|integer(uint16)|true|none|none|
|ServerType|string|false|none|none|
|ShardID|string|false|none|ShardID|
|Type|integer(uint32)|true|none|none|
|ipobject|string|false|none|none|

<h2 id="tocS_LinkResponse">LinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemalinkresponse"></a>
<a id="schema_LinkResponse"></a>
<a id="tocSlinkresponse"></a>
<a id="tocslinkresponse"></a>

```json
{
  "data": {
    "url": "http://example.com/share/#",
    "uuid": "4141a255-d382-46ef-974e-62dc830acc8f"
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|» url|string|false|none|none|
|» uuid|string|false|none|none|

<h2 id="tocS_ListUsers">ListUsers</h2>
<!-- backwards compatibility -->
<a id="schemalistusers"></a>
<a id="schema_ListUsers"></a>
<a id="tocSlistusers"></a>
<a id="tocslistusers"></a>

```json
{
  "count": 0,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|count|
|data|[[CreateUserStruct](#schemacreateuserstruct)]|false|none|the data|

<h2 id="tocS_MappingSchema">MappingSchema</h2>
<!-- backwards compatibility -->
<a id="schemamappingschema"></a>
<a id="schema_MappingSchema"></a>
<a id="tocSmappingschema"></a>
<a id="tocsmappingschema"></a>

```json
{
  "apply_ttl_all": true,
  "correlation_mapping": {},
  "create_date": "2019-08-24T14:15:22Z",
  "create_index": {},
  "create_table": "string",
  "fields_mapping": {},
  "fields_settings": {},
  "guid": "string",
  "hep_alias": "string",
  "hepid": 0,
  "partid": 0,
  "partition_step": 0,
  "profile": "string",
  "retention": 0,
  "schema_mapping": {},
  "schema_settings": {},
  "table_name": "string",
  "user_mapping": {},
  "version": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apply_ttl_all|boolean|false|none|none|
|correlation_mapping|[JSONText](#schemajsontext)|false|none|none|
|create_date|string(date-time)|false|none|none|
|create_index|[JSONText](#schemajsontext)|false|none|none|
|create_table|string|false|none|none|
|fields_mapping|[JSONText](#schemajsontext)|false|none|none|
|fields_settings|[JSONText](#schemajsontext)|false|none|none|
|guid|string|false|none|none|
|hep_alias|string|false|none|none|
|hepid|integer(uint16)|false|none|none|
|partid|integer(uint16)|false|none|none|
|partition_step|integer(uint16)|false|none|none|
|profile|string|false|none|none|
|retention|integer(uint16)|false|none|none|
|schema_mapping|[JSONText](#schemajsontext)|false|none|none|
|schema_settings|[JSONText](#schemajsontext)|false|none|none|
|table_name|string|false|none|none|
|user_mapping|[JSONText](#schemajsontext)|false|none|none|
|version|integer(uint64)|false|none|none|

<h2 id="tocS_MessageDecoded">MessageDecoded</h2>
<!-- backwards compatibility -->
<a id="schemamessagedecoded"></a>
<a id="schema_MessageDecoded"></a>
<a id="tocSmessagedecoded"></a>
<a id="tocsmessagedecoded"></a>

```json
{
  "data": [
    {
      "decoded": [
        {
          "_source": {
            "_layers": {
              "eth": {
                "eth.dst": "06:3d:20:12:10:20",
                "eth.dst_tree": {
                  "eth.addr": "06:3d:20:12:10:20",
                  "eth.addr_resolved": "06:3d:20:12:10:20",
                  "eth.dst_resolved": "06:3d:20:12:10:20",
                  "eth.ig": "0",
                  "eth.lg": "1"
                },
                "eth.src": "02:5d:69:74:20:12",
                "eth.src_tree": {
                  "eth.addr": "02:5d:69:74:20:12",
                  "eth.addr_resolved": "02:5d:69:74:20:12",
                  "eth.ig": "0",
                  "eth.lg": "1",
                  "src_resolved": "02:5d:69:74:20:12"
                },
                "eth.type": "\"0x00000800\""
              },
              "frame": {
                "frame.cap_len": "1058",
                "frame.encap_type": "1",
                "frame.ignored": "0",
                "frame.interface_id": "0",
                "frame.interface_id_tree": {
                  "frame.interface_name": "-"
                },
                "frame.len": "1058",
                "frame.marked": "0",
                "frame.number": "1",
                "frame.offset_shift": "0.000000000",
                "frame.protocols": "eth:ethertype:ip:udp:sip:sdp",
                "frame.time": "Sep 30, 2021 07:06:10.950000000 UTC",
                "frame.time_delta": "0.000000000",
                "frame.time_delta_displayed": "0.000000000",
                "frame.time_epoch": "1632985570.950000000",
                "frame.time_relative": "0.000000000"
              },
              "ip": {
                "ip.checksum": "0x0000ffa5",
                "ip.checksum.status": "2",
                "ip.dsfield": "0x0000ffa5",
                "ip.dsfield_tree": {
                  "ip.dsfield_tree.dscp": "0",
                  "ip.dsfield_tree.ecn": "0"
                },
                "ip.dst": "127.0.0.1",
                "ip.dst_host": "127.0.0.1",
                "ip.flags": "0x00000000",
                "ip.flags_tree": {
                  "ip.flags_tree.df": "0",
                  "ip.flags_tree.mf": "0",
                  "ip.flags_tree.rb": "0"
                },
                "ip.frag_offset": "0",
                "ip.hdr_len": "20",
                "ip.host": "127.0.0.1",
                "ip.id": "0x00000000",
                "ip.len": "1044",
                "ip.proto": "17",
                "ip.src": "127.0.0.1",
                "ip.src_host": "127.0.0.1",
                "ip.ttl": "54",
                "ip.version": "4"
              },
              "sip": {
                "sip.Request-line": "INVITE sip:196@example.com;user=phone SIP/2.0",
                "sip.Request-line_tree": {
                  "sip.Method": "INVITE",
                  "sip.Request-line_tree": {
                    "sip.r-uri.host": "example.com",
                    "sip.r-uri.user": "196"
                  },
                  "sip.r-uri": "sip:196@example.com;user=phone",
                  "sip.resend": "0"
                },
                "sip.msg_body": {
                  "sdp.connection_info": "\"IN IP4 192.168.10.193\"",
                  "sdp.media": "audio 5004 RTP/AVP 0 8 9 18 101",
                  "sdp.media_attr": "fmtp:101 0-15",
                  "sdp.media_attr_tree": {
                    "sdp.fmtp.parameter": "0-15",
                    "sdp.media.format": "101",
                    "sdp.media_attribute.field": "fmtp"
                  },
                  "sdp.media_tree": {
                    "sdp.media.format": "DynamicRTP-Type-101",
                    "sdp.media.media": "audio",
                    "sdp.media.port": "5004",
                    "sdp.media.port_string": "5004",
                    "sdp.media.proto": "RTP/AVP"
                  },
                  "sdp.owner": "hepgenjs 8000 8000 IN IP4 192.168.10.193",
                  "sdp.owner_tree": {
                    "sdp.owner.address": "192.168.10.193",
                    "sdp.owner.address_type": "IP4",
                    "sdp.owner.network_type": "IN",
                    "sdp.owner.sessionid": "8000",
                    "sdp.owner.username": "hepgenjs",
                    "sdp.owner.version": "8000"
                  },
                  "sdp.session_name": "\"SIP Call\"",
                  "sdp.time": "\"0 0\"",
                  "sdp.time_tree": {
                    "sdp.time.start": "0",
                    "sdp.time.stop": "0"
                  },
                  "sdp.version": "0",
                  "sip.connection_info_tree": {
                    "sdp.connection_info.address": "192.168.10.193",
                    "sdp.connection_info.address_type": "IP4",
                    "sdp.connection_info.network_type": "IN"
                  }
                },
                "sip.msg_hdr": "\"Via: SIP/2.0/UDP 192.168.10.193:5064;branch=z9hG4bK923381359;rport\\r\\nFrom: <sip:hepgenjs@example.com;user=phone>;tag=415746302\\r\\nTo: <sip:196@example.com;user=phone>\\r\\nCall-ID: a6xh18@127.0.0.1\\r\\nCSeq: 440 INVITE\\r\\nContact: <sip:hepgenjs@192.168.10.193:5064;user=phone>\\r\\nMax-Forwards: 70\\r\\nUser-Agent: HEPGEN.JS@example.com\\r\\nPrivacy: none\\r\\nP-Preferred-Identity: <sip:hepgenjs@example.com;user=phone>\\r\\nSupported: replaces, path, timer, eventlist\\r\\nAllow: INVITE, ACK, OPTIONS, CANCEL, BYE, SUBSCRIBE, NOTIFY, INFO, REFER, UPDATE, MESSAGE\\r\\nContent-Type: application/sdp\\r\\nAccept: application/sdp, application/dtmf-relay\\r\\nContent-Length:   313\\r\\n\\r\\nv=0\\r\\no=hepgenjs 8000 8000 IN IP4 192.168.10.193\\r\\ns=SIP Call\\r\\nc=IN IP4 192.168.10.193\\r\\nt=0 0\\r\\nm=audio 5004 RTP/AVP 0 8 9 18 101\\r\\na=sendrecv\\r\\na=rtpmap:0 PCMU/8000\\r\\na=ptime:20\\r\\na=rtpmap:8 PCMA/8000\\r\\na=rtpmap:9 G722/8000\\r\\na=rtpmap:18 G729/8000\\r\\na=fmtp:18 annexb=no\\r\\na=rtpmap:101 telephone-event/8000\\r\\na=fmtp:101 0-15\\r\\n\\r\\n\\r\\n\"",
                "sip.msg_hdr_tree": {}
              },
              "udp": {
                "udp.checksum": "0x0000ffa5",
                "udp.checksum.status": "2",
                "udp.dstport": "5060",
                "udp.length": "1024",
                "udp.port": "5060",
                "udp.srcport": "5060",
                "udp.stream": "0"
              }
            }
          },
          "_type": "pcap_file"
        }
      ]
    }
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|
|» decoded|[object]|false|none|none|
|»» _source|object|false|none|none|
|»»» _layers|object|false|none|none|
|»»»» eth|object|false|none|none|
|»»»»» eth.dst|string|false|none|none|
|»»»»» eth.dst_tree|object|false|none|none|
|»»»»»» eth.addr|string|false|none|none|
|»»»»»» eth.addr_resolved|string|false|none|none|
|»»»»»» eth.dst_resolved|string|false|none|none|
|»»»»»» eth.ig|string|false|none|none|
|»»»»»» eth.lg|string|false|none|none|
|»»»»» eth.src|string|false|none|none|
|»»»»» eth.src_tree|object|false|none|none|
|»»»»»» eth.addr|string|false|none|none|
|»»»»»» eth.addr_resolved|string|false|none|none|
|»»»»»» eth.ig|string|false|none|none|
|»»»»»» eth.lg|string|false|none|none|
|»»»»»» src_resolved|string|false|none|none|
|»»»»» eth.type|string|false|none|none|
|»»»» frame|object|false|none|none|
|»»»»» frame.cap_len|string|false|none|none|
|»»»»» frame.encap_type|string|false|none|none|
|»»»»» frame.ignored|string|false|none|none|
|»»»»» frame.interface_id|string|false|none|none|
|»»»»» frame.interface_id_tree|object|false|none|none|
|»»»»»» frame.interface_name|string|false|none|none|
|»»»»» frame.len|string|false|none|none|
|»»»»» frame.marked|string|false|none|none|
|»»»»» frame.number|string|false|none|none|
|»»»»» frame.offset_shift|string|false|none|none|
|»»»»» frame.protocols|string|false|none|none|
|»»»»» frame.time|string|false|none|none|
|»»»»» frame.time_delta|string|false|none|none|
|»»»»» frame.time_delta_displayed|string|false|none|none|
|»»»»» frame.time_epoch|string|false|none|none|
|»»»»» frame.time_relative|string|false|none|none|
|»»»» ip|object|false|none|none|
|»»»»» ip.checksum|string|false|none|none|
|»»»»» ip.checksum.status|string|false|none|none|
|»»»»» ip.dsfield|string|false|none|none|
|»»»»» ip.dsfield_tree|object|false|none|none|
|»»»»»» ip.dsfield_tree.dscp|string|false|none|none|
|»»»»»» ip.dsfield_tree.ecn|string|false|none|none|
|»»»»» ip.dst|string|false|none|none|
|»»»»» ip.dst_host|string|false|none|none|
|»»»»» ip.flags|string|false|none|none|
|»»»»» ip.flags_tree|object|false|none|none|
|»»»»»» ip.flags_tree.df|string|false|none|none|
|»»»»»» ip.flags_tree.mf|string|false|none|none|
|»»»»»» ip.flags_tree.rb|string|false|none|none|
|»»»»» ip.frag_offset|string|false|none|none|
|»»»»» ip.hdr_len|string|false|none|none|
|»»»»» ip.host|string|false|none|none|
|»»»»» ip.id|string|false|none|none|
|»»»»» ip.len|string|false|none|none|
|»»»»» ip.proto|string|false|none|none|
|»»»»» ip.src|string|false|none|none|
|»»»»» ip.src_host|string|false|none|none|
|»»»»» ip.ttl|string|false|none|none|
|»»»»» ip.version|string|false|none|none|
|»»»» sip|object|false|none|none|
|»»»»» sip.Request-line|string|false|none|none|
|»»»»» sip.Request-line_tree|object|false|none|none|
|»»»»»» sip.Method|string|false|none|none|
|»»»»»» sip.Request-line_tree|object|false|none|none|
|»»»»»»» sip.r-uri.host|string|false|none|none|
|»»»»»»» sip.r-uri.user|string|false|none|none|
|»»»»»» sip.r-uri|string|false|none|none|
|»»»»»» sip.resend|string|false|none|none|
|»»»»» sip.msg_body|object|false|none|none|
|»»»»»» sdp.connection_info|string|false|none|none|
|»»»»»» sdp.media|string|false|none|none|
|»»»»»» sdp.media_attr|string|false|none|none|
|»»»»»» sdp.media_attr_tree|object|false|none|none|
|»»»»»»» sdp.fmtp.parameter|string|false|none|none|
|»»»»»»» sdp.media.format|string|false|none|none|
|»»»»»»» sdp.media_attribute.field|string|false|none|none|
|»»»»»» sdp.media_tree|object|false|none|none|
|»»»»»»» sdp.media.format|string|false|none|none|
|»»»»»»» sdp.media.media|string|false|none|none|
|»»»»»»» sdp.media.port|string|false|none|none|
|»»»»»»» sdp.media.port_string|string|false|none|none|
|»»»»»»» sdp.media.proto|string|false|none|none|
|»»»»»» sdp.owner|string|false|none|none|
|»»»»»» sdp.owner_tree|object|false|none|none|
|»»»»»»» sdp.owner.address|string|false|none|none|
|»»»»»»» sdp.owner.address_type|string|false|none|none|
|»»»»»»» sdp.owner.network_type|string|false|none|none|
|»»»»»»» sdp.owner.sessionid|string|false|none|none|
|»»»»»»» sdp.owner.username|string|false|none|none|
|»»»»»»» sdp.owner.version|string|false|none|none|
|»»»»»» sdp.session_name|string|false|none|none|
|»»»»»» sdp.time|string|false|none|none|
|»»»»»» sdp.time_tree|object|false|none|none|
|»»»»»»» sdp.time.start|string|false|none|none|
|»»»»»»» sdp.time.stop|string|false|none|none|
|»»»»»» sdp.version|string|false|none|none|
|»»»»»» sip.connection_info_tree|object|false|none|none|
|»»»»»»» sdp.connection_info.address|string|false|none|none|
|»»»»»»» sdp.connection_info.address_type|string|false|none|none|
|»»»»»»» sdp.connection_info.network_type|string|false|none|none|
|»»»»» sip.msg_hdr|string|false|none|none|
|»»»»» sip.msg_hdr_tree|object|false|none|none|
|»»»» udp|object|false|none|none|
|»»»»» udp.checksum|string|false|none|none|
|»»»»» udp.checksum.status|string|false|none|none|
|»»»»» udp.dstport|string|false|none|none|
|»»»»» udp.length|string|false|none|none|
|»»»»» udp.port|string|false|none|none|
|»»»»» udp.srcport|string|false|none|none|
|»»»»» udp.stream|string|false|none|none|
|»» _type|string|false|none|none|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "arhive": false,
  "db_archive": "hepic_archive",
  "db_name": "hepic_data",
  "host": "148.251.238.121",
  "name": "DE7 Node",
  "node": "\"\"",
  "online": true,
  "primary": false,
  "table_prefix": "string",
  "value": "de7node"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arhive|boolean|false|none|none|
|db_archive|string|false|none|none|
|db_name|string|false|none|none|
|host|string|false|none|none|
|name|string|false|none|none|
|node|string|false|none|none|
|online|boolean|false|none|none|
|primary|boolean|false|none|none|
|table_prefix|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_NodeList">NodeList</h2>
<!-- backwards compatibility -->
<a id="schemanodelist"></a>
<a id="schema_NodeList"></a>
<a id="tocSnodelist"></a>
<a id="tocsnodelist"></a>

```json
{
  "count": 1,
  "data": [
    {
      "arhive": false,
      "db_archive": "hepic_archive",
      "db_name": "hepic_data",
      "host": "148.251.238.121",
      "name": "DE7 Node",
      "node": "\"\"",
      "online": true,
      "primary": false,
      "table_prefix": "string",
      "value": "de7node"
    }
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|
|data|[[Node](#schemanode)]|false|none|none|

<h2 id="tocS_OLDAliasStruct">OLDAliasStruct</h2>
<!-- backwards compatibility -->
<a id="schemaoldaliasstruct"></a>
<a id="schema_OLDAliasStruct"></a>
<a id="tocSoldaliasstruct"></a>
<a id="tocsoldaliasstruct"></a>

```json
{
  "Arguments": [
    {}
  ],
  "CreateDate": "2019-08-24T14:15:22Z",
  "DataMaps": [
    [
      {}
    ]
  ],
  "Db": "string",
  "ManualResync": true,
  "Node": "string",
  "Query": "string",
  "Status": true,
  "Table": "string",
  "Type": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Arguments|[object]|false|none|none|
|CreateDate|string(date-time)|false|none|none|
|DataMaps|[array]|false|none|none|
|Db|string|false|none|none|
|ManualResync|boolean|false|none|none|
|Node|string|false|none|none|
|Query|string|false|none|none|
|Status|boolean|false|none|none|
|Table|string|false|none|none|
|Type|string|false|none|none|

<h2 id="tocS_PCAPResponse">PCAPResponse</h2>
<!-- backwards compatibility -->
<a id="schemapcapresponse"></a>
<a id="schema_PCAPResponse"></a>
<a id="tocSpcapresponse"></a>
<a id="tocspcapresponse"></a>

```json
{
  "File": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|File|[File](#schemafile)|false|none|none|

<h2 id="tocS_PrometheusObject">PrometheusObject</h2>
<!-- backwards compatibility -->
<a id="schemaprometheusobject"></a>
<a id="schema_PrometheusObject"></a>
<a id="tocSprometheusobject"></a>
<a id="tocsprometheusobject"></a>

```json
{
  "param": {
    "limit": 0,
    "metrics": [
      "string"
    ],
    "precision": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|param|object|false|none|none|
|» limit|integer(int64)|false|none|none|
|» metrics|[string]|false|none|none|
|» precision|integer(int64)|false|none|none|
|» total|boolean|false|none|none|
|timestamp|object|false|none|none|
|» from|integer(int64)|false|none|none|
|» to|integer(int64)|false|none|none|

<h2 id="tocS_RecordingTransactionRTP">RecordingTransactionRTP</h2>
<!-- backwards compatibility -->
<a id="schemarecordingtransactionrtp"></a>
<a id="schema_RecordingTransactionRTP"></a>
<a id="tocSrecordingtransactionrtp"></a>
<a id="tocsrecordingtransactionrtp"></a>

```json
{
  "active": true,
  "correlation_id": "string",
  "create_date": 0,
  "date": "string",
  "direction": 0,
  "dst_ip": "string",
  "dst_port": 0,
  "filename": "string",
  "liid": 0,
  "node": "string",
  "proto": 0,
  "record_datetime": "2019-08-24T14:15:22Z",
  "sid": 0,
  "src_ip": "string",
  "src_port": 0,
  "ssrc": 0,
  "storedir": "string",
  "time_sec": 0,
  "time_usec": 0,
  "type": "string",
  "uuid": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|status|
|correlation_id|string|false|none|Correlation ID|
|create_date|integer(uint32)|true|none|none|
|date|string|true|none|none|
|direction|integer(uint8)|false|none|UINT|
|dst_ip|string|false|none|destination_ip|
|dst_port|integer(uint16)|false|none|destination_port|
|filename|string|false|none|filename|
|liid|integer(uint32)|false|none|liid|
|node|string|false|none|node|
|proto|integer(uint8)|false|none|TimeUsec|
|record_datetime|string(date-time)|true|none|none|
|sid|integer(uint32)|false|none|sid|
|src_ip|string|false|none|source_ip|
|src_port|integer(uint16)|false|none|source_port|
|ssrc|integer(uint32)|false|none|Ssrc|
|storedir|string|false|none|Storedir|
|time_sec|integer(uint32)|false|none|Timesec|
|time_usec|integer(uint32)|false|none|TimeUsec|
|type|string|false|none|type|
|uuid|string|true|none|none|

<h2 id="tocS_RecordingTransactionSIP">RecordingTransactionSIP</h2>
<!-- backwards compatibility -->
<a id="schemarecordingtransactionsip"></a>
<a id="schema_RecordingTransactionSIP"></a>
<a id="tocSrecordingtransactionsip"></a>
<a id="tocsrecordingtransactionsip"></a>

```json
{
  "active": true,
  "correlation_id": "string",
  "create_date": 0,
  "date": "string",
  "dst_ip": "string",
  "dst_port": 0,
  "filename": "string",
  "liid": 0,
  "node": "string",
  "proto": 0,
  "record_datetime": "2019-08-24T14:15:22Z",
  "sid": 0,
  "src_ip": "string",
  "src_port": 0,
  "storedir": "string",
  "time_sec": 0,
  "time_usec": 0,
  "type": "string",
  "uuid": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|status|
|correlation_id|string|false|none|Correlation ID|
|create_date|integer(uint32)|true|none|none|
|date|string|true|none|none|
|dst_ip|string|false|none|destination_ip|
|dst_port|integer(uint16)|false|none|destination_port|
|filename|string|false|none|filename|
|liid|integer(uint32)|false|none|liid|
|node|string|false|none|node|
|proto|integer(uint8)|false|none|TimeUsec|
|record_datetime|string(date-time)|true|none|none|
|sid|integer(uint32)|false|none|sid|
|src_ip|string|false|none|source_ip|
|src_port|integer(uint16)|false|none|source_port|
|storedir|string|false|none|Storedir|
|time_sec|integer(uint32)|false|none|Timesec|
|time_usec|integer(uint32)|false|none|TimeUsec|
|type|string|false|none|type|
|uuid|string|true|none|none|

<h2 id="tocS_RemoteLabels">RemoteLabels</h2>
<!-- backwards compatibility -->
<a id="schemaremotelabels"></a>
<a id="schema_RemoteLabels"></a>
<a id="tocSremotelabels"></a>
<a id="tocsremotelabels"></a>

```json
[
  "string"
]

```

#### Properties

*None*

<h2 id="tocS_RemoteObject">RemoteObject</h2>
<!-- backwards compatibility -->
<a id="schemaremoteobject"></a>
<a id="schema_RemoteObject"></a>
<a id="tocSremoteobject"></a>
<a id="tocsremoteobject"></a>

```json
{
  "param": {
    "limit": 0,
    "search": "string",
    "server": "string",
    "timezone": {}
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|param|object|false|none|none|
|» limit|integer(int64)|false|none|none|
|» search|string|false|none|none|
|» server|string|false|none|none|
|» timezone|object|false|none|none|
|timestamp|object|false|none|none|
|» from|integer(int64)|false|none|none|
|» to|integer(int64)|false|none|none|

<h2 id="tocS_RemoteResponseData">RemoteResponseData</h2>
<!-- backwards compatibility -->
<a id="schemaremoteresponsedata"></a>
<a id="schema_RemoteResponseData"></a>
<a id="tocSremoteresponsedata"></a>
<a id="tocsremoteresponsedata"></a>

```json
{
  "Data": [
    {
      "custom_1": "string",
      "custom_2": "{\"duration\":\"0\",\"from_user\":\"1201\",\"ruri_user\":\"102110112384797001\",status\":\"8\",\"type\":\"call\"}",
      "id": 1,
      "micro_ts": 1634081796154
    }
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[object]|false|none|none|
|» custom_1|string|false|none|none|
|» custom_2|string|false|none|none|
|» id|integer(int64)|false|none|none|
|» micro_ts|integer(int64)|false|none|none|

<h2 id="tocS_RemoteValues">RemoteValues</h2>
<!-- backwards compatibility -->
<a id="schemaremotevalues"></a>
<a id="schema_RemoteValues"></a>
<a id="tocSremotevalues"></a>
<a id="tocsremotevalues"></a>

```json
[
  "string"
]

```

#### Properties

*None*

<h2 id="tocS_SIPPResponse">SIPPResponse</h2>
<!-- backwards compatibility -->
<a id="schemasippresponse"></a>
<a id="schema_SIPPResponse"></a>
<a id="tocSsippresponse"></a>
<a id="tocssippresponse"></a>

```json
{
  "File": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|File|[File](#schemafile)|false|none|none|

<h2 id="tocS_ScriptDataStruct">ScriptDataStruct</h2>
<!-- backwards compatibility -->
<a id="schemascriptdatastruct"></a>
<a id="schema_ScriptDataStruct"></a>
<a id="tocSscriptdatastruct"></a>
<a id="tocsscriptdatastruct"></a>

```json
{
  "data": "verizon",
  "hep_alias": "string",
  "hepid": 0,
  "partid": 0,
  "profile": "string",
  "status": true,
  "type": "javascript / lua",
  "uuid": "string",
  "version": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|data name|
|hep_alias|string|false|none|none|
|hepid|integer(uint16)|false|none|none|
|partid|integer(uint16)|false|none|none|
|profile|string|false|none|Profile|
|status|boolean|true|none|none|
|type|string|true|none|none|
|uuid|string|false|none|ShardID|
|version|integer(uint64)|false|none|Version|

<h2 id="tocS_SearchCallData">SearchCallData</h2>
<!-- backwards compatibility -->
<a id="schemasearchcalldata"></a>
<a id="schema_SearchCallData"></a>
<a id="tocSsearchcalldata"></a>
<a id="tocssearchcalldata"></a>

```json
{
  "data": [
    {
      "aliasDst": "string",
      "aliasSrc": "string",
      "create_date": 0,
      "destination": 0,
      "dstHost": "string",
      "dstId": "string",
      "dstIp": "string",
      "dstPort": 0.1,
      "id": 0.1,
      "method": "string",
      "method_text": "string",
      "micro_ts": 0,
      "msg_color": "string",
      "prot": 0.1,
      "protocol": 0.1,
      "ruri_user": "string",
      "sid": "string",
      "srcHost": "string",
      "srcId": "string",
      "srcIp": "string",
      "srcPort": 0.1,
      "table": "string"
    }
  ],
  "keys": [
    "callid",
    "srcIp",
    "srcPort"
  ],
  "total": 45
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CallElement](#schemacallelement)]|false|none|none|
|keys|[string]|false|none|none|
|total|integer(int64)|false|none|none|

<h2 id="tocS_SearchObject">SearchObject</h2>
<!-- backwards compatibility -->
<a id="schemasearchobject"></a>
<a id="schema_SearchObject"></a>
<a id="tocSsearchobject"></a>
<a id="tocssearchobject"></a>

```json
{
  "param": {
    "archive": false,
    "limit": 200,
    "location": {
      "group": [
        "local"
      ],
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": []
    },
    "timezone": null,
    "transaction": {},
    "whitelist": [
      "192.1698.10.20"
    ]
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|param|object|true|none|none|
|» archive|boolean|false|none|this control the type of search archive<br>type: boolean|
|» limit|integer(int64)|true|none|this controls the number of records to display|
|» location|object|false|none|location|
|»» group|[string]|false|none|group of nodes to search the records<br>type: array<br>items:<br>type: string|
|»» node|[string]|false|none|node to search the records<br>type: array<br>items:<br>type: string|
|» orlogic|boolean|false|none|this control the type of search one can perform<br>type: boolean|
|» search|object|true|none|this control the type of search one can perform<br>type: string|
|» timezone|object|false|none|timezone settings<br>type: object|
|»» name|string|false|none|none|
|»» value|integer(int64)|false|none|none|
|» transaction|object|false|none|none|
|» whitelist|[string]|false|none|ips to be removed from search|
|timestamp|object|false|none|this control the time range for used for search|
|» from|integer(int64)|true|none|current timestamp in milliseconds|
|» to|integer(int64)|true|none|current timestamp in milliseconds|

<h2 id="tocS_SearchTransactionData">SearchTransactionData</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactiondata"></a>
<a id="schema_SearchTransactionData"></a>
<a id="tocSsearchtransactiondata"></a>
<a id="tocssearchtransactiondata"></a>

```json
{
  "param": {
    "limit": 200,
    "location": {
      "node": [
        "local"
      ]
    },
    "orlogic": false,
    "search": {
      "60_call_h20": {
        "callid": [
          "437711663849803218062147"
        ],
        "uuid": []
      }
    },
    "timezone": null,
    "transaction": {
      "call": true,
      "registration": false,
      "rest": false
    },
    "whitelist": []
  },
  "timestamp": {
    "from": 1581793200000,
    "to": 1581879599000
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|param|object|true|none|none|
|» limit|integer(int64)|true|none|this controls the number of records to display|
|» location|object|false|none|location|
|»» node|[string]|false|none|node to search the records<br>type: array<br>items:<br>type: string|
|» orlogic|boolean|false|none|this control the type of search one can perform<br>type: boolean|
|» search|object|true|none|this control the type of search one can perform<br>type: string|
|»» 60_call_h20|object|false|none|table to be search from|
|»»» callid|[string]|true|none|callid of the message for the search from|
|»»» uuid|[string]|true|none|uuid of the message|
|» timezone|object|false|none|timezone settings<br>type: object|
|»» name|string|false|none|none|
|»» value|integer(int64)|false|none|none|
|» transaction|object|false|none|type: object|
|»» call|boolean|false|none|none|
|»» registration|boolean|false|none|none|
|»» rest|boolean|false|none|none|
|» whitelist|[string]|false|none|ips to be removed from search|
|timestamp|object|false|none|this control the time range for used for search|
|» from|integer(int64)|true|none|current timestamp in milliseconds|
|» to|integer(int64)|true|none|current timestamp in milliseconds|

<h2 id="tocS_SearchTransactionQos">SearchTransactionQos</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactionqos"></a>
<a id="schema_SearchTransactionQos"></a>
<a id="tocSsearchtransactionqos"></a>
<a id="tocssearchtransactionqos"></a>

```json
{
  "rtcp": {
    "data": [
      {
        "captureId": "2001",
        "capturePass": "myHep",
        "correlation_id": "wvn6zg@127.0.0.1",
        "create_date": "021-10-04T19:16:22.699Z",
        "dbnode": "localnode",
        "dstIp": "127.0.0.1",
        "dstPort": 5060,
        "id": 1030,
        "node": [
          "2001",
          "localnode"
        ],
        "payloadType": 100,
        "profile": "string",
        "proto": "log",
        "protocol": 17,
        "protocolFamily": 2,
        "raw": "string",
        "sid": "wvn6zg@127.0.0.1",
        "srcIp": "127.0.0.1",
        "srcPort": 5080,
        "timeSeconds": 1633374982,
        "timeUseconds": 699000
      }
    ]
  },
  "rtp": {
    "data": [
      {
        "captureId": "2001",
        "capturePass": "myHep",
        "correlation_id": "wvn6zg@127.0.0.1",
        "create_date": "021-10-04T19:16:22.699Z",
        "dbnode": "localnode",
        "dstIp": "127.0.0.1",
        "dstPort": 5060,
        "id": 1030,
        "node": [
          "2001",
          "localnode"
        ],
        "payloadType": 100,
        "profile": "string",
        "proto": "log",
        "protocol": 17,
        "protocolFamily": 2,
        "raw": "string",
        "sid": "wvn6zg@127.0.0.1",
        "srcIp": "127.0.0.1",
        "srcPort": 5080,
        "timeSeconds": 1633374982,
        "timeUseconds": 699000
      }
    ]
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rtcp|[SearchTransactionRtpList](#schemasearchtransactionrtplist)|false|none|none|
|rtp|[SearchTransactionRtpList](#schemasearchtransactionrtplist)|false|none|none|

<h2 id="tocS_SearchTransactionResponse">SearchTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactionresponse"></a>
<a id="schema_SearchTransactionResponse"></a>
<a id="tocSsearchtransactionresponse"></a>
<a id="tocssearchtransactionresponse"></a>

```json
{
  "Data": [
    {
      "Hostinfo": {
        "property1": {
          "alias": "string",
          "color": {
            "background": "string",
            "border": "string",
            "font": "string"
          },
          "custom_params": {
            "origin": "string",
            "team": "string"
          },
          "group": "string",
          "image": "string",
          "ip": "string",
          "ipv6": true,
          "isLinkImg": true,
          "mask": 0,
          "port": 0,
          "servertype": "string",
          "shardid": "string",
          "status": true,
          "type": 0
        },
        "property2": {
          "alias": "string",
          "color": {
            "background": "string",
            "border": "string",
            "font": "string"
          },
          "custom_params": {
            "origin": "string",
            "team": "string"
          },
          "group": "string",
          "image": "string",
          "ip": "string",
          "ipv6": true,
          "isLinkImg": true,
          "mask": 0,
          "port": 0,
          "servertype": "string",
          "shardid": "string",
          "status": true,
          "type": 0
        }
      },
      "alias": {
        "property1": "string",
        "property2": "string"
      },
      "calldata": [
        {
          "aliasDst": "string",
          "aliasSrc": "string",
          "create_date": 0,
          "destination": 0,
          "dstHost": "string",
          "dstId": "string",
          "dstIp": "string",
          "dstPort": 0.1,
          "id": 0.1,
          "method": "string",
          "method_text": "string",
          "micro_ts": 0,
          "msg_color": "string",
          "prot": 0.1,
          "protocol": 0.1,
          "ruri_user": "string",
          "sid": "string",
          "srcHost": "string",
          "srcId": "string",
          "srcIp": "string",
          "srcPort": 0.1,
          "table": "string"
        }
      ],
      "callid": [
        "string"
      ],
      "data": {
        "uac": {
          "property1": {
            "agent": "string",
            "alias": "string",
            "dns": "string",
            "image": "string"
          },
          "property2": {
            "agent": "string",
            "alias": "string",
            "dns": "string",
            "image": "string"
          }
        }
      },
      "hosts": {
        "property1": {
          "host": [
            "string"
          ],
          "position": 0
        },
        "property2": {
          "host": [
            "string"
          ],
          "position": 0
        }
      },
      "messages": [
        {
          "aliasDst": "string",
          "aliasSrc": "string",
          "callid": "string",
          "captid": 0,
          "captureId": 0,
          "capture_ip": "string",
          "correlation_id": "string",
          "create_date": 0,
          "create_ts": 0,
          "cseqm": "string",
          "cseqnum": 0,
          "data": "string",
          "dstIp": "string",
          "dstPort": 0,
          "from_domain": "string",
          "from_user": "string",
          "hepproto": 0,
          "id": 0,
          "ip_tos": 0,
          "method": "string",
          "micro_ts": 0,
          "milliTimeseconds": 0,
          "node": "string",
          "proto": 0,
          "protocol": 0,
          "pty": 0,
          "queue": 0,
          "raw": "string",
          "region_id": "string",
          "respc": 0,
          "ruri_user": "string",
          "sdp": true,
          "sid": "string",
          "srcIp": "string",
          "srcPort": 0,
          "table": "string",
          "tcpflag": 0,
          "timeSeconds": 0,
          "timeUseconds": 0,
          "to_domain": "string",
          "to_user": "string",
          "tss": 0,
          "tsu": 0,
          "uuid": "string",
          "vlan": 0
        }
      ],
      "sdp": {
        "property1": {
          "property1": {
            "audioCodec": 0,
            "destinationSipIP": "string",
            "gid": 0,
            "mediaIpAudio": "string",
            "mediaIpVideo": "string",
            "mediaPortAudio": 0,
            "mediaPortVideo": 0,
            "micro_ts": 0,
            "protocol": 0,
            "request": true,
            "sdpOrigin": "string",
            "sdpSessionID": 0,
            "sipId": 0,
            "sourceSipIP": "string",
            "type": 0,
            "videoCodec": 0
          },
          "property2": {
            "audioCodec": 0,
            "destinationSipIP": "string",
            "gid": 0,
            "mediaIpAudio": "string",
            "mediaIpVideo": "string",
            "mediaPortAudio": 0,
            "mediaPortVideo": 0,
            "micro_ts": 0,
            "protocol": 0,
            "request": true,
            "sdpOrigin": "string",
            "sdpSessionID": 0,
            "sipId": 0,
            "sourceSipIP": "string",
            "type": 0,
            "videoCodec": 0
          }
        },
        "property2": {
          "property1": {
            "audioCodec": 0,
            "destinationSipIP": "string",
            "gid": 0,
            "mediaIpAudio": "string",
            "mediaIpVideo": "string",
            "mediaPortAudio": 0,
            "mediaPortVideo": 0,
            "micro_ts": 0,
            "protocol": 0,
            "request": true,
            "sdpOrigin": "string",
            "sdpSessionID": 0,
            "sipId": 0,
            "sourceSipIP": "string",
            "type": 0,
            "videoCodec": 0
          },
          "property2": {
            "audioCodec": 0,
            "destinationSipIP": "string",
            "gid": 0,
            "mediaIpAudio": "string",
            "mediaIpVideo": "string",
            "mediaPortAudio": 0,
            "mediaPortVideo": 0,
            "micro_ts": 0,
            "protocol": 0,
            "request": true,
            "sdpOrigin": "string",
            "sdpSessionID": 0,
            "sipId": 0,
            "sourceSipIP": "string",
            "type": 0,
            "videoCodec": 0
          }
        }
      },
      "transaction": [
        {
          "Codecs": [
            {}
          ],
          "Correlations": [
            {}
          ],
          "CustomString->Key": [
            {}
          ],
          "CustomString->Value": [
            {}
          ],
          "CustomUInt->Key": [
            {}
          ],
          "CustomUInt->Value": [
            {}
          ],
          "IPs": [
            "string"
          ],
          "Methods->Key": [
            "string"
          ],
          "Methods->Value": [
            0
          ],
          "Metrics->Key": [
            "string"
          ],
          "Metrics->Value": [
            0
          ],
          "aliasDst": "string",
          "aliasSrc": "string",
          "anumber_ext": "string",
          "archive": true,
          "auth_user": "string",
          "bnumber_ext": "string",
          "callid": "string",
          "captid": 0,
          "cdr_connect": 0,
          "cdr_progress": 0,
          "cdr_ringing": 0,
          "cdr_start": 0,
          "cdr_stop": 0,
          "codia": 0,
          "contact_user": "string",
          "correlation_id": "string",
          "create_date": 0,
          "custom_1": "string",
          "custom_2": "string",
          "custom_3": "string",
          "custom_4": "string",
          "custom_5": "string",
          "custom_6": "string",
          "data": "string",
          "dest_cc": "string",
          "destcc": "string",
          "destination_ip": "string",
          "destination_port": 0,
          "destlan": 0.1,
          "destlat": 0.1,
          "did": "string",
          "diversion_user": "string",
          "duration": 0,
          "event": 0,
          "family": 0,
          "from_domain": "string",
          "from_user": "string",
          "geo_cc": "string",
          "geocc": "string",
          "geolan": 0,
          "geolat": 0,
          "ipgroup_in": "string",
          "ipgroup_out": "string",
          "jitter": 0,
          "mos": 0,
          "msg_info": "string",
          "one_way_audio": true,
          "pdd": 0,
          "pid_user": "string",
          "pl": 0,
          "proto": 0,
          "pty": 0,
          "queue": 0,
          "reason": 0,
          "region_id": "string",
          "rtp_stat_a": "string",
          "rtp_stat_b": "string",
          "ruri_user": "string",
          "sdpap": 0,
          "sdpap_b": 0,
          "sdpip": 0,
          "sdpip_b": 0,
          "sdpmedhost": "string",
          "sdpmedpr": "string",
          "sdpsid": 0,
          "sdpsver": 0,
          "sdpvp": 0,
          "sdpvp_b": 0,
          "server_type_in": "string",
          "server_type_out": "string",
          "sid": "string",
          "source_ip": "string",
          "source_port": 0,
          "sourcecc": "string",
          "sourcelan": 0.1,
          "sourcelat": 0.1,
          "srd": 0,
          "sss": 0,
          "status": 0,
          "table": "string",
          "termcode": 0,
          "termdir": 0,
          "to_domain": "string",
          "to_user": "string",
          "uas": "string",
          "update_ts": 0,
          "updcounter": 0,
          "usergroup": "string",
          "uuid": "string",
          "vlan": 0,
          "vqr_a": "string",
          "vqr_b": "string",
          "vst": 0,
          "xgroup": "string"
        }
      ]
    }
  ],
  "keys": [
    "string"
  ],
  "total": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[object]|false|none|none|
|» Hostinfo|object|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|»»» alias|string|false|none|none|
|»»» color|object|false|none|none|
|»»»» background|string|false|none|none|
|»»»» border|string|false|none|none|
|»»»» font|string|false|none|none|
|»»» custom_params|object|false|none|none|
|»»»» origin|string|false|none|none|
|»»»» team|string|false|none|none|
|»»» group|string|false|none|none|
|»»» image|string|false|none|none|
|»»» ip|string|false|none|none|
|»»» ipv6|boolean|false|none|none|
|»»» isLinkImg|boolean|false|none|none|
|»»» mask|integer(int64)|false|none|none|
|»»» port|integer(int64)|false|none|none|
|»»» servertype|string|false|none|none|
|»»» shardid|string|false|none|none|
|»»» status|boolean|false|none|none|
|»»» type|integer(int64)|false|none|none|
|» alias|object|false|none|none|
|»» **additionalProperties**|string|false|none|none|
|» calldata|[[CallElement](#schemacallelement)]|false|none|none|
|» callid|[string]|false|none|none|
|» data|object|false|none|none|
|»» uac|object|false|none|none|
|»»» **additionalProperties**|object|false|none|none|
|»»»» agent|string|false|none|none|
|»»»» alias|string|false|none|none|
|»»»» dns|string|false|none|none|
|»»»» image|string|false|none|none|
|» hosts|object|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|»»» host|[string]|false|none|none|
|»»» position|integer(int64)|false|none|none|
|» messages|[object]|false|none|none|
|»» aliasDst|string|false|none|none|
|»» aliasSrc|string|false|none|none|
|»» callid|string|false|none|none|
|»» captid|integer(int64)|false|none|none|
|»» captureId|integer(int64)|false|none|none|
|»» capture_ip|string|false|none|none|
|»» correlation_id|string|false|none|none|
|»» create_date|integer(int64)|false|none|none|
|»» create_ts|integer(int64)|false|none|none|
|»» cseqm|string|false|none|none|
|»» cseqnum|integer(int64)|false|none|none|
|»» data|string|false|none|none|
|»» dstIp|string|false|none|none|
|»» dstPort|integer(int64)|false|none|none|
|»» from_domain|string|false|none|none|
|»» from_user|string|false|none|none|
|»» hepproto|integer(int64)|false|none|none|
|»» id|integer(int64)|false|none|none|
|»» ip_tos|integer(int64)|false|none|none|
|»» method|string|false|none|none|
|»» micro_ts|integer(int64)|false|none|none|
|»» milliTimeseconds|integer(int64)|false|none|none|
|»» node|string|false|none|none|
|»» proto|integer(int64)|false|none|none|
|»» protocol|integer(int64)|false|none|none|
|»» pty|integer(int64)|false|none|none|
|»» queue|integer(int64)|false|none|none|
|»» raw|string|false|none|none|
|»» region_id|string|false|none|none|
|»» respc|integer(int64)|false|none|none|
|»» ruri_user|string|false|none|none|
|»» sdp|boolean|false|none|none|
|»» sid|string|false|none|none|
|»» srcIp|string|false|none|none|
|»» srcPort|integer(int64)|false|none|none|
|»» table|string|false|none|none|
|»» tcpflag|integer(int64)|false|none|none|
|»» timeSeconds|integer(int64)|false|none|none|
|»» timeUseconds|integer(int64)|false|none|none|
|»» to_domain|string|false|none|none|
|»» to_user|string|false|none|none|
|»» tss|integer(int64)|false|none|none|
|»» tsu|integer(int64)|false|none|none|
|»» uuid|string|false|none|none|
|»» vlan|integer(int64)|false|none|none|
|» sdp|object|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|»»» **additionalProperties**|object|false|none|none|
|»»»» audioCodec|integer(int64)|false|none|none|
|»»»» destinationSipIP|string|false|none|none|
|»»»» gid|integer(int64)|false|none|none|
|»»»» mediaIpAudio|string|false|none|none|
|»»»» mediaIpVideo|string|false|none|none|
|»»»» mediaPortAudio|integer(int64)|false|none|none|
|»»»» mediaPortVideo|integer(int64)|false|none|none|
|»»»» micro_ts|integer(int64)|false|none|none|
|»»»» protocol|integer(int64)|false|none|none|
|»»»» request|boolean|false|none|none|
|»»»» sdpOrigin|string|false|none|none|
|»»»» sdpSessionID|integer(int64)|false|none|none|
|»»»» sipId|integer(int64)|false|none|none|
|»»»» sourceSipIP|string|false|none|none|
|»»»» type|integer(int64)|false|none|none|
|»»»» videoCodec|integer(int64)|false|none|none|
|» transaction|[object]|false|none|none|
|»» Codecs|[object]|false|none|none|
|»» Correlations|[object]|false|none|none|
|»» CustomString->Key|[object]|false|none|none|
|»» CustomString->Value|[object]|false|none|none|
|»» CustomUInt->Key|[object]|false|none|none|
|»» CustomUInt->Value|[object]|false|none|none|
|»» IPs|[string]|false|none|none|
|»» Methods->Key|[string]|false|none|none|
|»» Methods->Value|[integer]|false|none|none|
|»» Metrics->Key|[string]|false|none|none|
|»» Metrics->Value|[integer]|false|none|none|
|»» aliasDst|string|false|none|none|
|»» aliasSrc|string|false|none|none|
|»» anumber_ext|string|false|none|none|
|»» archive|boolean|false|none|none|
|»» auth_user|string|false|none|none|
|»» bnumber_ext|string|false|none|none|
|»» callid|string|false|none|none|
|»» captid|integer(int64)|false|none|none|
|»» cdr_connect|integer(int64)|false|none|none|
|»» cdr_progress|integer(int64)|false|none|none|
|»» cdr_ringing|integer(int64)|false|none|none|
|»» cdr_start|integer(int64)|false|none|none|
|»» cdr_stop|integer(int64)|false|none|none|
|»» codia|integer(int64)|false|none|none|
|»» contact_user|string|false|none|none|
|»» correlation_id|string|false|none|none|
|»» create_date|integer(int64)|false|none|none|
|»» custom_1|string|false|none|none|
|»» custom_2|string|false|none|none|
|»» custom_3|string|false|none|none|
|»» custom_4|string|false|none|none|
|»» custom_5|string|false|none|none|
|»» custom_6|string|false|none|none|
|»» data|string|false|none|none|
|»» dest_cc|string|false|none|none|
|»» destcc|string|false|none|none|
|»» destination_ip|string|false|none|none|
|»» destination_port|integer(int64)|false|none|none|
|»» destlan|number(double)|false|none|none|
|»» destlat|number(double)|false|none|none|
|»» did|string|false|none|none|
|»» diversion_user|string|false|none|none|
|»» duration|integer(int64)|false|none|none|
|»» event|integer(int64)|false|none|none|
|»» family|integer(int64)|false|none|none|
|»» from_domain|string|false|none|none|
|»» from_user|string|false|none|none|
|»» geo_cc|string|false|none|none|
|»» geocc|string|false|none|none|
|»» geolan|integer(int64)|false|none|none|
|»» geolat|integer(int64)|false|none|none|
|»» ipgroup_in|string|false|none|none|
|»» ipgroup_out|string|false|none|none|
|»» jitter|integer(int64)|false|none|none|
|»» mos|integer(int64)|false|none|none|
|»» msg_info|string|false|none|none|
|»» one_way_audio|boolean|false|none|none|
|»» pdd|integer(int64)|false|none|none|
|»» pid_user|string|false|none|none|
|»» pl|integer(int64)|false|none|none|
|»» proto|integer(int64)|false|none|none|
|»» pty|integer(int64)|false|none|none|
|»» queue|integer(int64)|false|none|none|
|»» reason|integer(int64)|false|none|none|
|»» region_id|string|false|none|none|
|»» rtp_stat_a|string|false|none|none|
|»» rtp_stat_b|string|false|none|none|
|»» ruri_user|string|false|none|none|
|»» sdpap|integer(int64)|false|none|none|
|»» sdpap_b|integer(int64)|false|none|none|
|»» sdpip|integer(int64)|false|none|none|
|»» sdpip_b|integer(int64)|false|none|none|
|»» sdpmedhost|string|false|none|none|
|»» sdpmedpr|string|false|none|none|
|»» sdpsid|integer(int64)|false|none|none|
|»» sdpsver|integer(int64)|false|none|none|
|»» sdpvp|integer(int64)|false|none|none|
|»» sdpvp_b|integer(int64)|false|none|none|
|»» server_type_in|string|false|none|none|
|»» server_type_out|string|false|none|none|
|»» sid|string|false|none|none|
|»» source_ip|string|false|none|none|
|»» source_port|integer(int64)|false|none|none|
|»» sourcecc|string|false|none|none|
|»» sourcelan|number(double)|false|none|none|
|»» sourcelat|number(double)|false|none|none|
|»» srd|integer(int64)|false|none|none|
|»» sss|integer(int64)|false|none|none|
|»» status|integer(int64)|false|none|none|
|»» table|string|false|none|none|
|»» termcode|integer(int64)|false|none|none|
|»» termdir|integer(int64)|false|none|none|
|»» to_domain|string|false|none|none|
|»» to_user|string|false|none|none|
|»» uas|string|false|none|none|
|»» update_ts|integer(int64)|false|none|none|
|»» updcounter|integer(int64)|false|none|none|
|»» usergroup|string|false|none|none|
|»» uuid|string|false|none|none|
|»» vlan|integer(int64)|false|none|none|
|»» vqr_a|string|false|none|none|
|»» vqr_b|string|false|none|none|
|»» vst|integer(int64)|false|none|none|
|»» xgroup|string|false|none|none|
|keys|[string]|false|none|none|
|total|integer(int64)|false|none|none|

<h2 id="tocS_SearchTransactionRtcp">SearchTransactionRtcp</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactionrtcp"></a>
<a id="schema_SearchTransactionRtcp"></a>
<a id="tocSsearchtransactionrtcp"></a>
<a id="tocssearchtransactionrtcp"></a>

```json
{
  "captureId": "\"2001\"",
  "capturePass": "myHep",
  "correlation_id": "wvn6zg@127.0.0.1",
  "create_date": "021-10-04T19:16:22.699Z",
  "dbnode": "localnode",
  "dstIp": "127.0.0.1",
  "dstPort": 5060,
  "id": 1030,
  "node": [
    "2001",
    "localnode"
  ],
  "payloadType": 100,
  "profile": "string",
  "proto": "log",
  "protocol": 17,
  "protocolFamily": 2,
  "raw": "string",
  "sid": "wvn6zg@127.0.0.1",
  "srcIp": "127.0.0.1",
  "srcPort": 5080,
  "timeSeconds": 1633374982,
  "timeUseconds": 699000
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captureId|string|false|none|none|
|capturePass|string|false|none|none|
|correlation_id|string|false|none|none|
|create_date|string|false|none|none|
|dbnode|string|false|none|none|
|dstIp|string|false|none|none|
|dstPort|number(double)|false|none|none|
|id|number(double)|false|none|none|
|node|[string]|false|none|none|
|payloadType|integer(int64)|false|none|none|
|profile|string|false|none|none|
|proto|string|false|none|none|
|protocol|integer(int64)|false|none|none|
|protocolFamily|integer(int64)|false|none|none|
|raw|string|false|none|none|
|sid|string|false|none|none|
|srcIp|string|false|none|none|
|srcPort|number(double)|false|none|none|
|timeSeconds|integer(int64)|false|none|none|
|timeUseconds|integer(int64)|false|none|none|

<h2 id="tocS_SearchTransactionRtp">SearchTransactionRtp</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactionrtp"></a>
<a id="schema_SearchTransactionRtp"></a>
<a id="tocSsearchtransactionrtp"></a>
<a id="tocssearchtransactionrtp"></a>

```json
{
  "captureId": "2001",
  "capturePass": "myHep",
  "correlation_id": "wvn6zg@127.0.0.1",
  "create_date": "021-10-04T19:16:22.699Z",
  "dbnode": "localnode",
  "dstIp": "127.0.0.1",
  "dstPort": 5060,
  "id": 1030,
  "node": [
    "2001",
    "localnode"
  ],
  "payloadType": 100,
  "profile": "string",
  "proto": "log",
  "protocol": 17,
  "protocolFamily": 2,
  "raw": "string",
  "sid": "wvn6zg@127.0.0.1",
  "srcIp": "127.0.0.1",
  "srcPort": 5080,
  "timeSeconds": 1633374982,
  "timeUseconds": 699000
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captureId|string|false|none|none|
|capturePass|string|false|none|none|
|correlation_id|string|false|none|none|
|create_date|string|false|none|none|
|dbnode|string|false|none|none|
|dstIp|string|false|none|none|
|dstPort|number(double)|false|none|none|
|id|number(double)|false|none|none|
|node|[string]|false|none|none|
|payloadType|integer(int64)|false|none|none|
|profile|string|false|none|none|
|proto|string|false|none|none|
|protocol|integer(int64)|false|none|none|
|protocolFamily|integer(int64)|false|none|none|
|raw|string|false|none|none|
|sid|string|false|none|none|
|srcIp|string|false|none|none|
|srcPort|number(double)|false|none|none|
|timeSeconds|integer(int64)|false|none|none|
|timeUseconds|integer(int64)|false|none|none|

<h2 id="tocS_SearchTransactionRtpList">SearchTransactionRtpList</h2>
<!-- backwards compatibility -->
<a id="schemasearchtransactionrtplist"></a>
<a id="schema_SearchTransactionRtpList"></a>
<a id="tocSsearchtransactionrtplist"></a>
<a id="tocssearchtransactionrtplist"></a>

```json
{
  "data": [
    {
      "captureId": "2001",
      "capturePass": "myHep",
      "correlation_id": "wvn6zg@127.0.0.1",
      "create_date": "021-10-04T19:16:22.699Z",
      "dbnode": "localnode",
      "dstIp": "127.0.0.1",
      "dstPort": 5060,
      "id": 1030,
      "node": [
        "2001",
        "localnode"
      ],
      "payloadType": 100,
      "profile": "string",
      "proto": "log",
      "protocol": 17,
      "protocolFamily": 2,
      "raw": "string",
      "sid": "wvn6zg@127.0.0.1",
      "srcIp": "127.0.0.1",
      "srcPort": 5080,
      "timeSeconds": 1633374982,
      "timeUseconds": 699000
    }
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SearchTransactionRtp](#schemasearchtransactionrtp)]|false|none|none|

<h2 id="tocS_StatisticObject">StatisticObject</h2>
<!-- backwards compatibility -->
<a id="schemastatisticobject"></a>
<a id="schema_StatisticObject"></a>
<a id="tocSstatisticobject"></a>
<a id="tocsstatisticobject"></a>

```json
{
  "param": {
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "query": [
      {
        "database": "string",
        "main": "string",
        "rawquery": "string",
        "retention": "string",
        "tag": [
          "string"
        ],
        "type": [
          "string"
        ]
      }
    ],
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|param|object|false|none|none|
|» bfrom|integer(int64)|false|none|none|
|» limit|integer(int64)|false|none|none|
|» precision|integer(int64)|false|none|none|
|» query|[object]|false|none|none|
|»» database|string|false|none|none|
|»» main|string|false|none|none|
|»» rawquery|string|false|none|none|
|»» retention|string|false|none|none|
|»» tag|[string]|false|none|none|
|»» type|[string]|false|none|none|
|» total|boolean|false|none|none|
|timestamp|object|false|none|none|
|» from|integer(int64)|false|none|none|
|» to|integer(int64)|false|none|none|

<h2 id="tocS_StatisticSearchObject">StatisticSearchObject</h2>
<!-- backwards compatibility -->
<a id="schemastatisticsearchobject"></a>
<a id="schema_StatisticSearchObject"></a>
<a id="tocSstatisticsearchobject"></a>
<a id="tocsstatisticsearchobject"></a>

```json
{
  "param": {
    "Search": {
      "database": "string"
    },
    "bfrom": 0,
    "limit": 0,
    "precision": 0,
    "total": true
  },
  "timestamp": {
    "from": 0,
    "to": 0
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|param|object|false|none|none|
|» Search|object|false|none|none|
|»» database|string|false|none|none|
|» bfrom|integer(int64)|false|none|none|
|» limit|integer(int64)|false|none|none|
|» precision|integer(int64)|false|none|none|
|» total|boolean|false|none|none|
|timestamp|object|false|none|none|
|» from|integer(int64)|false|none|none|
|» to|integer(int64)|false|none|none|

<h2 id="tocS_StenographerResponse">StenographerResponse</h2>
<!-- backwards compatibility -->
<a id="schemastenographerresponse"></a>
<a id="schema_StenographerResponse"></a>
<a id="tocSstenographerresponse"></a>
<a id="tocsstenographerresponse"></a>

```json
{
  "File": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|File|[File](#schemafile)|false|none|none|

<h2 id="tocS_SuccessResponse">SuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuccessresponse"></a>
<a id="schema_SuccessResponse"></a>
<a id="tocSsuccessresponse"></a>
<a id="tocssuccessresponse"></a>

```json
{
  "count": 0,
  "data": {},
  "message": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|true|none|count elements in data|
|data|[JSONText](#schemajsontext)|true|none|none|
|message|string|true|none|the message for user|

<h2 id="tocS_TableAuthToken">TableAuthToken</h2>
<!-- backwards compatibility -->
<a id="schematableauthtoken"></a>
<a id="schema_TableAuthToken"></a>
<a id="tocStableauthtoken"></a>
<a id="tocstableauthtoken"></a>

```json
{
  "active": true,
  "create_date": "2019-08-24T14:15:22Z",
  "creator_guid": "string",
  "expire_date": "2019-08-24T14:15:22Z",
  "guid": "string",
  "ip_address": "string",
  "lastusage_date": "2019-08-24T14:15:22Z",
  "limit_calls": 0,
  "name": "string",
  "usage_calls": 0,
  "user_object": {},
  "usergroup": "string",
  "version": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|create_date|string(date-time)|false|none|none|
|creator_guid|string|false|none|none|
|expire_date|string(date-time)|false|none|none|
|guid|string|false|none|none|
|ip_address|string|false|none|none|
|lastusage_date|string(date-time)|false|none|none|
|limit_calls|integer(uint32)|false|none|none|
|name|string|false|none|none|
|usage_calls|integer(uint32)|false|none|none|
|user_object|[JSONText](#schemajsontext)|false|none|none|
|usergroup|string|false|none|none|
|version|integer(uint64)|false|none|none|

<h2 id="tocS_TableLogsDataV2">TableLogsDataV2</h2>
<!-- backwards compatibility -->
<a id="schematablelogsdatav2"></a>
<a id="schema_TableLogsDataV2"></a>
<a id="tocStablelogsdatav2"></a>
<a id="tocstablelogsdatav2"></a>

```json
{
  "callid": "string",
  "captid": 0,
  "capture_ip": "string",
  "create_ts": 0,
  "data": "string",
  "destination_ip": "string",
  "destination_port": 0,
  "event": "string",
  "guid": "string",
  "message": "string",
  "node": "string",
  "proto": 0,
  "source_ip": "string",
  "source_port": 0,
  "type": "string",
  "vlan": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callid|string|false|none|callid|
|captid|integer(uint32)|false|none|captid|
|capture_ip|string|false|none|capture_ip|
|create_ts|integer(uint64)|false|none|create_ts|
|data|string|false|none|data|
|destination_ip|string|false|none|destination_ip|
|destination_port|integer(uint16)|false|none|destination_port|
|event|string|false|none|event|
|guid|string|false|none|UUID|
|message|string|false|none|data|
|node|string|false|none|node|
|proto|integer(uint16)|false|none|proto|
|source_ip|string|false|none|source_ip|
|source_port|integer(uint16)|false|none|source_port|
|type|string|false|none|type|
|vlan|integer(uint8)|false|none|vlan|

<h2 id="tocS_TableRtpStatsV2">TableRtpStatsV2</h2>
<!-- backwards compatibility -->
<a id="schematablertpstatsv2"></a>
<a id="schema_TableRtpStatsV2"></a>
<a id="tocStablertpstatsv2"></a>
<a id="tocstablertpstatsv2"></a>

```json
{
  "callid": "string",
  "captid": 0,
  "capture_ip": "string",
  "create_ts": 0,
  "data": "string",
  "destination_ip": "string",
  "destination_port": 0,
  "event": "string",
  "frame_protocols": "string",
  "guid": "string",
  "message": "string",
  "node": "string",
  "proto": 0,
  "raw": "string",
  "source_ip": "string",
  "source_port": 0,
  "type": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callid|string|false|none|callid|
|captid|integer(uint32)|false|none|captid|
|capture_ip|string|false|none|capture_ip|
|create_ts|integer(uint64)|false|none|create_ts|
|data|string|false|none|data|
|destination_ip|string|false|none|destination_ip|
|destination_port|integer(uint16)|false|none|destination_port|
|event|string|false|none|event|
|frame_protocols|string|false|none|frame|
|guid|string|false|none|UUID|
|message|string|false|none|data|
|node|string|false|none|node|
|proto|integer(uint16)|false|none|proto|
|raw|string|false|none|data|
|source_ip|string|false|none|source_ip|
|source_port|integer(uint16)|false|none|source_port|
|type|string|false|none|type|

<h2 id="tocS_TableSipMessagesCallV2">TableSipMessagesCallV2</h2>
<!-- backwards compatibility -->
<a id="schematablesipmessagescallv2"></a>
<a id="schema_TableSipMessagesCallV2"></a>
<a id="tocStablesipmessagescallv2"></a>
<a id="tocstablesipmessagescallv2"></a>

```json
{
  "callid": "string",
  "captid": 0,
  "capture_ip": "string",
  "create_ts": 0,
  "data": "string",
  "destination_ip": "string",
  "destination_port": 0,
  "event": "string",
  "guid": "string",
  "message": "string",
  "node": "string",
  "proto": 0,
  "region_id": "string",
  "source_ip": "string",
  "source_port": 0,
  "vlan": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callid|string|false|none|callid|
|captid|integer(uint32)|false|none|captid|
|capture_ip|string|false|none|capture_ip|
|create_ts|integer(uint64)|false|none|create_ts|
|data|string|false|none|data|
|destination_ip|string|false|none|destination_ip|
|destination_port|integer(uint16)|false|none|destination_port|
|event|string|false|none|event|
|guid|string|false|none|UUID|
|message|string|false|none|data|
|node|string|false|none|node|
|proto|integer(uint16)|false|none|proto|
|region_id|string|false|none|region_id|
|source_ip|string|false|none|source_ip|
|source_port|integer(uint16)|false|none|source_port|
|vlan|integer(uint8)|false|none|vlan|

<h2 id="tocS_TableSipRegistrationAllV2">TableSipRegistrationAllV2</h2>
<!-- backwards compatibility -->
<a id="schematablesipregistrationallv2"></a>
<a id="schema_TableSipRegistrationAllV2"></a>
<a id="tocStablesipregistrationallv2"></a>
<a id="tocstablesipregistrationallv2"></a>

```json
{
  "callid": "string",
  "captid": 0,
  "capture_ip": "string",
  "create_ts": 0,
  "data": "string",
  "destination_ip": "string",
  "destination_port": 0,
  "event": "string",
  "guid": "string",
  "message": "string",
  "node": "string",
  "proto": 0,
  "region_id": "string",
  "source_ip": "string",
  "source_port": 0,
  "vlan": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callid|string|false|none|callid|
|captid|integer(uint32)|false|none|captid|
|capture_ip|string|false|none|capture_ip|
|create_ts|integer(uint64)|false|none|create_ts|
|data|string|false|none|data|
|destination_ip|string|false|none|destination_ip|
|destination_port|integer(uint16)|false|none|destination_port|
|event|string|false|none|event|
|guid|string|false|none|UUID|
|message|string|false|none|data|
|node|string|false|none|node|
|proto|integer(uint16)|false|none|proto|
|region_id|string|false|none|region_id|
|source_ip|string|false|none|source_ip|
|source_port|integer(uint16)|false|none|source_port|
|vlan|integer(uint8)|false|none|vlan|

<h2 id="tocS_TableSipTransactionCallV2">TableSipTransactionCallV2</h2>
<!-- backwards compatibility -->
<a id="schematablesiptransactioncallv2"></a>
<a id="schema_TableSipTransactionCallV2"></a>
<a id="tocStablesiptransactioncallv2"></a>
<a id="tocstablesiptransactioncallv2"></a>

```json
{
  "auth_user": "string",
  "callid": "string",
  "captid": 0,
  "cdr_failed": 0,
  "cdr_start": 0,
  "cdr_stop": 0,
  "contact_user": "string",
  "correlations": [
    "string"
  ],
  "cseq": 0,
  "custom_1": "string",
  "custom_2": "string",
  "custom_3": "string",
  "custom_4": "string",
  "custom_5": "string",
  "custom_6": "string",
  "customstring_key": [
    "string"
  ],
  "customstring_value": [
    "string"
  ],
  "customuint_key": [
    "string"
  ],
  "customuint_value": [
    0
  ],
  "data": "string",
  "destination_ip": "string",
  "destination_port": 0,
  "event": 0,
  "expire_rep": 0,
  "expire_req": 0,
  "family": 0,
  "from_user": "string",
  "geo_cc": "string",
  "guid": "string",
  "ipgroup_in": "string",
  "ipgroup_out": "string",
  "ips": [
    "string"
  ],
  "methods_key": [
    "string"
  ],
  "methods_value": [
    0
  ],
  "metrics_key": [
    "string"
  ],
  "metrics_value": [
    0.1
  ],
  "realm": "string",
  "region_id": "string",
  "rrd": 0,
  "ruri_user": "string",
  "server_type_in": "string",
  "server_type_out": "string",
  "source_ip": "string",
  "source_port": 0,
  "srd": 0,
  "status": 0,
  "termcode": 0,
  "to_user": "string",
  "uas": "string",
  "update_ts": 0,
  "usergroup": "string",
  "vlan": 0,
  "xgroup": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_user|string|false|none|auth_user|
|callid|string|false|none|callid|
|captid|integer(uint32)|false|none|captid|
|cdr_failed|integer(uint64)|false|none|cdr_failed|
|cdr_start|integer(uint64)|false|none|cdr_start|
|cdr_stop|integer(uint64)|false|none|cdr_stop|
|contact_user|string|false|none|contact_user|
|correlations|[string]|false|none|Correlations|
|cseq|integer(uint16)|false|none|cseq|
|custom_1|string|false|none|custom_1|
|custom_2|string|false|none|custom_2|
|custom_3|string|false|none|custom_3|
|custom_4|string|false|none|custom_4|
|custom_5|string|false|none|custom_5|
|custom_6|string|false|none|custom_6|
|customstring_key|[string]|false|none|CustomString.Key|
|customstring_value|[string]|false|none|CustomString.Value|
|customuint_key|[string]|false|none|CustomUInt.Key|
|customuint_value|[integer]|false|none|CustomUInt.Value|
|data|string|false|none|data|
|destination_ip|string|false|none|destination_ip|
|destination_port|integer(uint16)|false|none|destination_port|
|event|integer(uint16)|false|none|event|
|expire_rep|integer(uint16)|false|none|expire_rep|
|expire_req|integer(uint16)|false|none|expire_req|
|family|integer(uint8)|false|none|family|
|from_user|string|false|none|from_user|
|geo_cc|string|false|none|geo_cc|
|guid|string|false|none|UUID|
|ipgroup_in|string|false|none|ipgroup_in|
|ipgroup_out|string|false|none|ipgroup_out|
|ips|[string]|false|none|IPs|
|methods_key|[string]|false|none|Methods.Key|
|methods_value|[integer]|false|none|Methods.Value|
|metrics_key|[string]|false|none|Metrics.Key|
|metrics_value|[number]|false|none|Methods.Value|
|realm|string|false|none|cdr_stop|
|region_id|string|false|none|region_id|
|rrd|integer(uint16)|false|none|rrd|
|ruri_user|string|false|none|ruri_user|
|server_type_in|string|false|none|server_type_in|
|server_type_out|string|false|none|xgroup|
|source_ip|string|false|none|source_ip|
|source_port|integer(uint16)|false|none|source_port|
|srd|integer(uint16)|false|none|srd|
|status|integer(uint8)|false|none|status|
|termcode|integer(uint16)|false|none|termcode|
|to_user|string|false|none|to_user|
|uas|string|false|none|UAS|
|update_ts|integer(uint64)|false|none|update_ts|
|usergroup|string|false|none|usergroup|
|vlan|integer(uint8)|false|none|vlan|
|xgroup|string|false|none|xgroup|

<h2 id="tocS_TableUserList">TableUserList</h2>
<!-- backwards compatibility -->
<a id="schematableuserlist"></a>
<a id="schema_TableUserList"></a>
<a id="tocStableuserlist"></a>
<a id="tocstableuserlist"></a>

```json
{
  "count": 13,
  "data": [
    {
      "department": "NOC",
      "email": "string",
      "firstname": "string",
      "guid": "string",
      "lastname": "string",
      "params": {},
      "partid": 10,
      "password": "string",
      "usergroup": "admin",
      "username": "string",
      "version": 0
    }
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|
|data|[[CreateUserStruct](#schemacreateuserstruct)]|false|none|none|

<h2 id="tocS_TableVqrtcpxrStatsV2">TableVqrtcpxrStatsV2</h2>
<!-- backwards compatibility -->
<a id="schematablevqrtcpxrstatsv2"></a>
<a id="schema_TableVqrtcpxrStatsV2"></a>
<a id="tocStablevqrtcpxrstatsv2"></a>
<a id="tocstablevqrtcpxrstatsv2"></a>

```json
{
  "callid": "string",
  "captid": 0,
  "capture_ip": "string",
  "create_ts": 0,
  "data": "string",
  "destination_ip": "string",
  "destination_port": 0,
  "event": "string",
  "guid": "string",
  "message": "string",
  "mos": 0,
  "node": "string",
  "proto": 0,
  "source_ip": "string",
  "source_port": 0,
  "type": "string",
  "vlan": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callid|string|false|none|callid|
|captid|integer(uint32)|false|none|captid|
|capture_ip|string|false|none|capture_ip|
|create_ts|integer(uint64)|false|none|create_ts|
|data|string|false|none|data|
|destination_ip|string|false|none|destination_ip|
|destination_port|integer(uint16)|false|none|destination_port|
|event|string|false|none|event|
|guid|string|false|none|UUID|
|message|string|false|none|data|
|mos|integer(uint16)|false|none|mos|
|node|string|false|none|node|
|proto|integer(uint16)|false|none|proto|
|source_ip|string|false|none|source_ip|
|source_port|integer(uint16)|false|none|source_port|
|type|string|false|none|type|
|vlan|integer(uint8)|false|none|vlan|

<h2 id="tocS_TextResponse">TextResponse</h2>
<!-- backwards compatibility -->
<a id="schematextresponse"></a>
<a id="schema_TextResponse"></a>
<a id="tocStextresponse"></a>
<a id="tocstextresponse"></a>

```json
{
  "File": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|File|[File](#schemafile)|false|none|none|

<h2 id="tocS_UserDeleteSuccessResponse">UserDeleteSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserdeletesuccessresponse"></a>
<a id="schema_UserDeleteSuccessResponse"></a>
<a id="tocSuserdeletesuccessresponse"></a>
<a id="tocsuserdeletesuccessresponse"></a>

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully deleted user"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_UserDetailsResponse">UserDetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserdetailsresponse"></a>
<a id="schema_UserDetailsResponse"></a>
<a id="tocSuserdetailsresponse"></a>
<a id="tocsuserdetailsresponse"></a>

```json
{
  "user": {
    "admin": true,
    "force_password": true,
    "usergroup": "string",
    "username": "string"
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|object|false|none|the uuid|
|» admin|boolean|false|none|none|
|» force_password|boolean|false|none|none|
|» usergroup|string|false|none|none|
|» username|string|false|none|none|

<h2 id="tocS_UserFileDownload">UserFileDownload</h2>
<!-- backwards compatibility -->
<a id="schemauserfiledownload"></a>
<a id="schema_UserFileDownload"></a>
<a id="tocSuserfiledownload"></a>
<a id="tocsuserfiledownload"></a>

```json
{
  "File": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|File|[File](#schemafile)|false|none|none|

<h2 id="tocS_UserFileUpload">UserFileUpload</h2>
<!-- backwards compatibility -->
<a id="schemauserfileupload"></a>
<a id="schema_UserFileUpload"></a>
<a id="tocSuserfileupload"></a>
<a id="tocsuserfileupload"></a>

```json
{
  "File": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|File|[File](#schemafile)|false|none|none|

<h2 id="tocS_UserGroupList">UserGroupList</h2>
<!-- backwards compatibility -->
<a id="schemausergrouplist"></a>
<a id="schema_UserGroupList"></a>
<a id="tocSusergrouplist"></a>
<a id="tocsusergrouplist"></a>

```json
{
  "count": 13,
  "data": [
    "admin",
    "user"
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|
|data|[string]|false|none|none|

<h2 id="tocS_UserLegacyStruct">UserLegacyStruct</h2>
<!-- backwards compatibility -->
<a id="schemauserlegacystruct"></a>
<a id="schema_UserLegacyStruct"></a>
<a id="tocSuserlegacystruct"></a>
<a id="tocsuserlegacystruct"></a>

```json
{
  "Department": "NOC",
  "Email": "string",
  "FirstName": "string",
  "LastName": "string",
  "Params": "string",
  "PartID": 0,
  "Password": "string",
  "PasswordHash": "admin",
  "UserGroup": "admin",
  "UserName": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Department|string|true|none|none|
|Email|string|true|none|none|
|FirstName|string|true|none|none|
|LastName|string|true|none|none|
|Params|string|false|none|example {}|
|PartID|integer(uint16)|true|none|none|
|Password|string|true|none|none|
|PasswordHash|string|false|none|none|
|UserGroup|string|false|none|none|
|UserName|string|false|none|none|

<h2 id="tocS_UserLogin">UserLogin</h2>
<!-- backwards compatibility -->
<a id="schemauserlogin"></a>
<a id="schema_UserLogin"></a>
<a id="tocSuserlogin"></a>
<a id="tocsuserlogin"></a>

```json
{
  "password": "sipcapture",
  "type": "internal",
  "username": "admin"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|
|type|string|false|none|the type of the auth one would like to perform, internal/ldap|
|username|string|true|none|none|

<h2 id="tocS_UserLoginSuccessResponse">UserLoginSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserloginsuccessresponse"></a>
<a id="schema_UserLoginSuccessResponse"></a>
<a id="tocSuserloginsuccessresponse"></a>
<a id="tocsuserloginsuccessresponse"></a>

```json
{
  "scope": "b9f6q23a-0bde-41ce-cd36-da3dbc17ea12",
  "token": "JWT Token",
  "user": {
    "admin": true,
    "force_password": true
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|string|false|none|the uuid|
|token|string|false|none|the token|
|user|object|false|none|none|
|» admin|boolean|false|none|none|
|» force_password|boolean|false|none|none|

<h2 id="tocS_UserSettings">UserSettings</h2>
<!-- backwards compatibility -->
<a id="schemausersettings"></a>
<a id="schema_UserSettings"></a>
<a id="tocSusersettings"></a>
<a id="tocsusersettings"></a>

```json
{
  "data": {},
  "guid": "string",
  "params": "string",
  "protocol_id": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[JSONText](#schemajsontext)|false|none|none|
|guid|string|false|none|none|
|params|string|false|none|none|
|protocol_id|string|false|none|none|

<h2 id="tocS_UserSuccessResponse">UserSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemausersuccessresponse"></a>
<a id="schema_UserSuccessResponse"></a>
<a id="tocSusersuccessresponse"></a>
<a id="tocsusersuccessresponse"></a>

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully created user"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|true|none|data in JSON format|
|message|string|true|none|the message for user|

<h2 id="tocS_UserUpdateSuccessResponse">UserUpdateSuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserupdatesuccessresponse"></a>
<a id="schema_UserUpdateSuccessResponse"></a>
<a id="tocSuserupdatesuccessresponse"></a>
<a id="tocsuserupdatesuccessresponse"></a>

```json
{
  "data": "af72057b-2745-0a1b-b674-56586aadec57",
  "message": "successfully updated user"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_file">file</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_file"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{}

```

file is the real representation of *File.

#### Properties

*None*

