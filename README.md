## Classes

<dt><a href="#HappyWheels">HappyWheels</a> - the only accessible class</dt>
<dt><a href="#Level">Level</a></dt>
<dt><a href="#Replay">Replay</a></dt>
<dt><a href="#User">User</a></dt>

<a name="HappyWheels"></a>

## HappyWheels
The main class. Used to interact with the api.

* [HappyWheels](#HappyWheels)
    * [.searchLevels(query, [options])](#HappyWheels.searchLevels) ⇒ <code>Promise.&lt;Array.&lt;Level&gt;&gt;</code>
    * [.getFeatured(options)](#HappyWheels.getFeatured) ⇒ <code>Promise.&lt;Array.&lt;Level&gt;&gt;</code>
    * [.getLevel(id)](#HappyWheels.getLevel) ⇒ [<code>Promise.&lt;Level&gt;</code>](#Level)
    * [.getReplay(id)](#HappyWheels.getReplay) ⇒ [<code>Promise.&lt;Replay&gt;</code>](#Replay)
    * [.getUser(id)](#HappyWheels.getUser) ⇒ [<code>Promise.&lt;User&gt;</code>](#User)

<a name="HappyWheels.searchLevels"></a>

### HappyWheels.searchLevels(query, [<a href="#Options">options</a>]) ⇒ <code>Promise.&lt;Array.&lt;Level&gt;&gt;</code>
Searches levels in happy wheels

| Param | Type | Description |
| --- | --- | --- |
| query | <code>String</code> | query |
| ?<a href="#Options">options</a> | <code>Object</code> | options |

<a name="HappyWheels.getFeatured"></a>

### HappyWheels.getFeatured([<a href="#Options">options</a>]) ⇒ <code>Promise.&lt;Array.&lt;Level&gt;&gt;</code>
Gets happy wheels featured levels

| Param | Type | Description |
| --- | --- | --- |
| ?<a href="#Options">options</a> | <code>Object</code> | options |

<a name="HappyWheels.getLevel"></a>

### HappyWheels.getLevel(id) ⇒ [<code>Promise.&lt;Level&gt;</code>](#Level)
Gets happy wheels level

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | level id |

<a name="HappyWheels.getReplay"></a>

### HappyWheels.getReplay(id) ⇒ [<code>Promise.&lt;Replay&gt;</code>](#Replay)
Gets happy wheels replay

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | replay id |

<a name="HappyWheels.getUser"></a>

### HappyWheels.getUser(id) ⇒ [<code>Promise.&lt;User&gt;</code>](#User)
Gets happy wheels user

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | user id |

<a name="Level"></a>

## Level
Represents a level on happy wheels.

* [Level](#Level)
    * [new Level(data)](#new_Level_new)
    * [.name](#Level+name) : <code>String</code>
    * [.id](#Level+id) : <code>String</code>
    * [.description](#Level+description) : <code>String</code>
    * [.character](#Level+character) : <code>String</code>
    * [.createdAt](#Level+createdAt) : <code>Date</code>
    * [.author](#Level+author) : [<code>User</code>](#User)
    * [.playCount](#Level+playCount) : <code>Number</code>
    * [.votes](#Level+votes) : <code>Number</code>
    * [.weightedRating](#Level+weightedRating) : <code>Number</code>
    * [.url](#Level+url) : <code>String</code>
    * [.averageRating](#Level+averageRating) : <code>Number</code>
    * [.getReplays(sortBy)](#Level+getReplays) ⇒ <code>Promise.&lt;Array.&lt;Replay&gt;&gt;</code>

<a name="new_Level_new"></a>

### new Level(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | parsed XML data |

<a name="Level+name"></a>

### level.name : <code>String</code>
The name of the level

<a name="Level+id"></a>

### level.id : <code>String</code>
The id of the level

<a name="Level+description"></a>

### level.description : <code>String</code>
The description of the level

<a name="Level+character"></a>

### level.character : <code>String</code>
The character of the level

<a name="Level+createdAt"></a>

### level.createdAt : <code>Date</code>
The creation date of the level

<a name="Level+author"></a>

### level.author : [<code>User</code>](#User)
The author of the level

<a name="Level+playCount"></a>

### level.playCount : <code>Number</code>
The play count of the level

<a name="Level+votes"></a>

### level.votes : <code>Number</code>
The votes of the level

<a name="Level+weightedRating"></a>

### level.weightedRating : <code>Number</code>
The weighted rating of the level

<a name="Level+url"></a>

### level.url : <code>String</code>
The level URL.

**Read only**: true  
<a name="Level+averageRating"></a>

### level.averageRating : <code>Number</code>
The average rating of the level.

**Read only**: true  
<a name="Level+getReplays"></a>

### level.getReplays(sortBy) ⇒ <code>Promise.&lt;Array.&lt;Replay&gt;&gt;</code>
Gets all replays from the level.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| sortBy | <code>String</code> | <code>completion_time</code> | sort by |

<a name="Replay"></a>

## Replay
Represents a replay on happy wheels.

* [Replay](#Replay)
    * [new Replay(data)](#new_Replay_new)
    * [.levelID](#Replay+levelID) : <code>String</code>
    * [.level](#Replay+level) : <code>Object</code>
    * [.id](#Replay+id) : <code>String</code>
    * [.description](#Replay+description) : <code>String</code>
    * [.character](#Replay+character) : <code>String</code>
    * [.createdAt](#Replay+createdAt) : <code>Date</code>
    * [.author](#Replay+author) : [<code>User</code>](#User)
    * [.votes](#Replay+votes) : <code>Number</code>
    * [.weightedRating](#Replay+weightedRating) : <code>Number</code>
    * [.url](#Replay+url) : <code>String</code>
    * [.averageRating](#Replay+averageRating) : <code>Number</code>
    * [.getLevel()](#Replay+getLevel) ⇒ [<code>Promise.&lt;Level&gt;</code>](#Level)

<a name="new_Replay_new"></a>

### new Replay(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | parsed XML data |

<a name="Replay+levelID"></a>

### replay.levelID : <code>String</code>
The ID of the replays level

<a name="Replay+level"></a>

### replay.level : <code>Object</code>
The level of the replay

<a name="Replay+id"></a>

### replay.id : <code>String</code>
The ID of the replay

<a name="Replay+description"></a>

### replay.description : <code>String</code>
The description of the replay

<a name="Replay+character"></a>

### replay.character : <code>String</code>
The character used in the replay

<a name="Replay+createdAt"></a>

### replay.createdAt : <code>Date</code>
The creation date of the replay

<a name="Replay+author"></a>

### replay.author : [<code>User</code>](#User)
The author of the replay

<a name="Replay+votes"></a>

### replay.votes : <code>Number</code>
The votes of the replay

<a name="Replay+weightedRating"></a>

### replay.weightedRating : <code>Number</code>
The weighted rating of the replay

<a name="Replay+url"></a>

### replay.url : <code>String</code>
The replay URL.

**Read only**: true  
<a name="Replay+averageRating"></a>

### replay.averageRating : <code>Number</code>
The average rating of the replay.

**Read only**: true  
<a name="Replay+getLevel"></a>

### replay.getLevel() ⇒ [<code>Promise.&lt;Level&gt;</code>](#Level)
Gets the level of the replay.

<a name="User"></a>

## User
Represents a user on happy wheels.


* [User](#User)
    * [new User(id)](#new_User_new)
    * [.username](#User+username) : <code>String</code>
    * [.id](#User+id) : <code>String</code>
    * [.profileURL](#User+profileURL) : <code>String</code>
    * [.getLevels()](#User+getLevels) ⇒ <code>Promise.&lt;Array.&lt;Level&gt;&gt;</code>
    * [.getProfile()](#User+getProfile) ⇒ [<code>Promise.&lt;User&gt;</code>](#User)

<a name="new_User_new"></a>

### new User(id)

| Param | Type | Description |
| --- | --- | --- |
| id | <code>object</code> | parsed XML data |

<a name="User+username"></a>

### user.username : <code>String</code>
The username of the user

<a name="User+id"></a>

### user.id : <code>String</code>
The ID of the user

<a name="User+profileURL"></a>

### user.profileURL : <code>String</code>
The profile URL.

**Read only**: true  
<a name="User+getLevels"></a>

### user.getLevels() ⇒ <code>Promise.&lt;Array.&lt;Level&gt;&gt;</code>
Gets all levels created by this user.

<a name="User+getProfile"></a>

### user.getProfile() ⇒ [<code>Promise.&lt;User&gt;</code>](#User)
Fetches the user's profile on [totaljerkface.com](http://www.totaljerkface.com/) and applies it to itself.

## Options

```
{
   searchBy: 'name|user',
   sortBy: 'newest|oldest|plays|rating',
   uploaded: 'today|week|month|anytime',
   query: 'any',
   limit: 50,
   levelID: 'id',
   userID: 'id',
   replayID: 'id'
}
```

<a name="Options"></a>
