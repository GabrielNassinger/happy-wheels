# happy-wheels
Node.js happy wheels API wrapper.

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
    * [.url](#Level+url) : <code>String</code>
    * [.averageRating](#Level+averageRating) : <code>Number</code>
    * [.getReplays(sortBy)](#Level+getReplays) ⇒ <code>Promise.&lt;Array.&lt;Replays&gt;&gt;</code>

<a name="new_Level_new"></a>

### new Level(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | parsed XML data |

<a name="Level+url"></a>

### level.url : <code>String</code>
The url of the level.

**Kind**: instance property of [<code>Level</code>](#Level)  
**Read only**: true  
<a name="Level+averageRating"></a>

### level.averageRating : <code>Number</code>
The average rating of the level.

**Kind**: instance property of [<code>Level</code>](#Level)  
**Read only**: true  
<a name="Level+getReplays"></a>

### level.getReplays(sortBy) ⇒ <code>Promise.&lt;Array.&lt;Replays&gt;&gt;</code>
Lists all level replays.

**Kind**: instance method of [<code>Level</code>](#Level)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| sortBy | <code>String</code> | <code>completion_time</code> | sort by |

<a name="Replay"></a>

## Replay
Represents a replay on happy wheels.

**Kind**: global class  
<a name="new_Replay_new"></a>

### new Replay(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | parsed XML data |

<a name="User"></a>

## User
Represents a user on happy wheels.

**Kind**: global class  
<a name="new_User_new"></a>

### new User(id)

| Param | Type | Description |
| --- | --- | --- |
| id | <code>object</code> | parsed XML data |
