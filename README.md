## Classes

<dl>
<dt><a href="#Level">Level</a></dt>
<dd><p>Represents a level on happy wheels.</p>
</dd>
<dt><a href="#Replay">Replay</a></dt>
<dd><p>Represents a replay on happy wheels.</p>
</dd>
<dt><a href="#User">User</a></dt>
<dd><p>Represents a user on happy wheels.</p>
</dd>
</dl>

<a name="Level"></a>

## Level
Represents a level on happy wheels.

**Kind**: global class  

* [Level](#Level)
    * [new Level(data)](#new_Level_new)
    * [.name](#Level+name) : <code>string</code>
    * [.url](#Level+url) : <code>String</code>
    * [.averageRating](#Level+averageRating) : <code>Number</code>
    * [.getReplays(sortBy)](#Level+getReplays) ⇒ <code>Promise.&lt;Array.&lt;Replays&gt;&gt;</code>

<a name="new_Level_new"></a>

### new Level(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | parsed XML data |

<a name="Level+name"></a>

### level.name : <code>string</code>
The name of the level

**Kind**: instance property of [<code>Level</code>](#Level)  
<a name="Level+url"></a>

### level.url : <code>String</code>
The level URL.

**Kind**: instance property of [<code>Level</code>](#Level)  
**Read only**: true  
<a name="Level+averageRating"></a>

### level.averageRating : <code>Number</code>
The average rating of the level.

**Kind**: instance property of [<code>Level</code>](#Level)  
**Read only**: true  
<a name="Level+getReplays"></a>

### level.getReplays(sortBy) ⇒ <code>Promise.&lt;Array.&lt;Replays&gt;&gt;</code>
Gets all replays from the level.

**Kind**: instance method of [<code>Level</code>](#Level)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| sortBy | <code>String</code> | <code>completion_time</code> | sort by |

<a name="Replay"></a>

## Replay
Represents a replay on happy wheels.

**Kind**: global class  

* [Replay](#Replay)
    * [new Replay(data)](#new_Replay_new)
    * [.url](#Replay+url) : <code>String</code>
    * [.averageRating](#Replay+averageRating) : <code>Number</code>
    * [.getLevel()](#Replay+getLevel) ⇒ [<code>Promise.&lt;Level&gt;</code>](#Level)

<a name="new_Replay_new"></a>

### new Replay(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | parsed XML data |

<a name="Replay+url"></a>

### replay.url : <code>String</code>
The replay URL.

**Kind**: instance property of [<code>Replay</code>](#Replay)  
**Read only**: true  
<a name="Replay+averageRating"></a>

### replay.averageRating : <code>Number</code>
The average rating of the replay.

**Kind**: instance property of [<code>Replay</code>](#Replay)  
**Read only**: true  
<a name="Replay+getLevel"></a>

### replay.getLevel() ⇒ [<code>Promise.&lt;Level&gt;</code>](#Level)
Gets the level of the replay.

**Kind**: instance method of [<code>Replay</code>](#Replay)  
<a name="User"></a>

## User
Represents a user on happy wheels.

**Kind**: global class  

* [User](#User)
    * [new User(id)](#new_User_new)
    * [.profileURL](#User+profileURL) : <code>String</code>
    * [.getLevels()](#User+getLevels) ⇒ [<code>Promise.&lt;Level&gt;</code>](#Level)
    * [.getProfile()](#User+getProfile) ⇒ [<code>Promise.&lt;User&gt;</code>](#User)

<a name="new_User_new"></a>

### new User(id)

| Param | Type | Description |
| --- | --- | --- |
| id | <code>object</code> | parsed XML data |

<a name="User+profileURL"></a>

### user.profileURL : <code>String</code>
The profile URL.

**Kind**: instance property of [<code>User</code>](#User)  
**Read only**: true  
<a name="User+getLevels"></a>

### user.getLevels() ⇒ [<code>Promise.&lt;Level&gt;</code>](#Level)
Gets all levels created by this user.

**Kind**: instance method of [<code>User</code>](#User)  
<a name="User+getProfile"></a>

### user.getProfile() ⇒ [<code>Promise.&lt;User&gt;</code>](#User)
Fetches the user profile on [totaljerkface.com](http://www.totaljerkface.com/).

**Kind**: instance method of [<code>User</code>](#User) 
