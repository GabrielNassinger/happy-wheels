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
    * [.name](#Level+name) : <code>String</code>
    * [.id](#Level+id) : <code>String</code>
    * [.description](#Level+description) : <code>String</code>
    * [.character](#Level+character) : <code>String</code>
    * [.author](#Level+author) : <code>Date</code>
    * [.author](#Level+author) : [<code>User</code>](#User)
    * [.playCount](#Level+playCount) : <code>Number</code>
    * [.votes](#Level+votes) : <code>Number</code>
    * [.weightedRating](#Level+weightedRating) : <code>Number</code>
    * [.url](#Level+url) : <code>String</code>
    * [.averageRating](#Level+averageRating) : <code>Number</code>
    * [.getReplays(sortBy)](#Level+getReplays) ⇒ <code>Array.&lt;Replays&gt;</code>

<a name="new_Level_new"></a>

### new Level(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | parsed XML data |

<a name="Level+name"></a>

### level.name : <code>String</code>
The name of the level

**Kind**: instance property of [<code>Level</code>](#Level)  
<a name="Level+id"></a>

### level.id : <code>String</code>
The id of the level

**Kind**: instance property of [<code>Level</code>](#Level)  
<a name="Level+description"></a>

### level.description : <code>String</code>
The description of the level

**Kind**: instance property of [<code>Level</code>](#Level)  
<a name="Level+character"></a>

### level.character : <code>String</code>
The character of the level

**Kind**: instance property of [<code>Level</code>](#Level)  
<a name="Level+author"></a>

### level.author : <code>Date</code>
The creation date of the level

**Kind**: instance property of [<code>Level</code>](#Level)  
<a name="Level+author"></a>

### level.author : [<code>User</code>](#User)
The author of the level

**Kind**: instance property of [<code>Level</code>](#Level)  
<a name="Level+playCount"></a>

### level.playCount : <code>Number</code>
The play count of the level

**Kind**: instance property of [<code>Level</code>](#Level)  
<a name="Level+votes"></a>

### level.votes : <code>Number</code>
The votes of the level

**Kind**: instance property of [<code>Level</code>](#Level)  
<a name="Level+weightedRating"></a>

### level.weightedRating : <code>Number</code>
The weighted rating of the level

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

### level.getReplays(sortBy) ⇒ <code>Array.&lt;Replays&gt;</code>
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
    * [.getLevel()](#Replay+getLevel) ⇒ [<code>Level</code>](#Level)

<a name="new_Replay_new"></a>

### new Replay(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | parsed XML data |

<a name="Replay+levelID"></a>

### replay.levelID : <code>String</code>
The ID of the replays level

**Kind**: instance property of [<code>Replay</code>](#Replay)  
<a name="Replay+level"></a>

### replay.level : <code>Object</code>
The level of the replay

**Kind**: instance property of [<code>Replay</code>](#Replay)  
<a name="Replay+id"></a>

### replay.id : <code>String</code>
The ID of the replay

**Kind**: instance property of [<code>Replay</code>](#Replay)  
<a name="Replay+description"></a>

### replay.description : <code>String</code>
The description of the replay

**Kind**: instance property of [<code>Replay</code>](#Replay)  
<a name="Replay+character"></a>

### replay.character : <code>String</code>
The character used in the replay

**Kind**: instance property of [<code>Replay</code>](#Replay)  
<a name="Replay+createdAt"></a>

### replay.createdAt : <code>Date</code>
The creation date of the replay

**Kind**: instance property of [<code>Replay</code>](#Replay)  
<a name="Replay+author"></a>

### replay.author : [<code>User</code>](#User)
The author of the replay

**Kind**: instance property of [<code>Replay</code>](#Replay)  
<a name="Replay+votes"></a>

### replay.votes : <code>Number</code>
The votes of the replay

**Kind**: instance property of [<code>Replay</code>](#Replay)  
<a name="Replay+weightedRating"></a>

### replay.weightedRating : <code>Number</code>
The weighted rating of the replay

**Kind**: instance property of [<code>Replay</code>](#Replay)  
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

### replay.getLevel() ⇒ [<code>Level</code>](#Level)
Gets the level of the replay.

**Kind**: instance method of [<code>Replay</code>](#Replay)  
<a name="User"></a>

## User
Represents a user on happy wheels.

**Kind**: global class  

* [User](#User)
    * [new User(id)](#new_User_new)
    * [.username](#User+username) : <code>String</code>
    * [.id](#User+id) : <code>String</code>
    * [.profileURL](#User+profileURL) : <code>String</code>
    * [.getLevels()](#User+getLevels) ⇒ [<code>Level</code>](#Level)
    * [.getProfile()](#User+getProfile) ⇒ [<code>User</code>](#User)

<a name="new_User_new"></a>

### new User(id)

| Param | Type | Description |
| --- | --- | --- |
| id | <code>object</code> | parsed XML data |

<a name="User+username"></a>

### user.username : <code>String</code>
The username of the user

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+id"></a>

### user.id : <code>String</code>
The ID of the user

**Kind**: instance property of [<code>User</code>](#User)  
<a name="User+profileURL"></a>

### user.profileURL : <code>String</code>
The profile URL.

**Kind**: instance property of [<code>User</code>](#User)  
**Read only**: true  
<a name="User+getLevels"></a>

### user.getLevels() ⇒ [<code>Level</code>](#Level)
Gets all levels created by this user.

**Kind**: instance method of [<code>User</code>](#User)  
<a name="User+getProfile"></a>

### user.getProfile() ⇒ [<code>User</code>](#User)
Fetches the user profile on [totaljerkface.com](http://www.totaljerkface.com/).

**Kind**: instance method of [<code>User</code>](#User) 
