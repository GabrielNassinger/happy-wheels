# happy-wheels
Node.js happy wheels API wrapper.

## Level
Represents a level on happy wheels.

* [Level](#Level)
    * [new Level(data)](#new_Level_new)
    * [.url](#Level+url) : <code>String</code>
    * [.averageRating](#Level+averageRating) : <code>Number</code>
    * [.getReplays(sortBy)](#Level+getReplays) ⇒ <code>Promise.&lt;Array.&lt;Replays&gt;&gt;</code>

### level.url : <code>String</code>
The url of the level.

**Read only**: true  

### level.averageRating : <code>Number</code>
The average rating of the level.

**Read only**: true  

### level.getReplays(sortBy) ⇒ <code>Promise<Array<Replays>></code>
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
