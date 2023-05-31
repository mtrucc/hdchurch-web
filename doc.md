## 数据库设计参考

PS：仅做参考，根据业务需求进行调整

设计原则：尽量避免表联查可以方便后期直接导入到 Elaticsearch 中和导出到 Excel 中，如作者字段，可以直接存储作者的名称，而不是作者的 ID

Mysql 目前支持 Json 类型数据，可以直接存储 Json 数据，如缩略图、视频等，一个文章中可以有多个图片、视频，可以直接存储 Json 数组

参考：https://dev.mysql.com/doc/refman/8.0/en/json.html

数据参考：

```json
[
  {
    "url": "http://www.baidu.com/baidu.jpg",
    "name": "百度"
  },
  {
    "url": "http://www.google.com/google.jpg",
    "name": "谷歌"
  }
]
```

### 基础内容表设计参考

**字段说明**

<!-- 页面 模块 排序 名称 说明 markdown内容 是否登录显示 更新时间 添加时间 -->

| 字段名      | 类型         | 说明          |
| ----------- | ------------ | ------------- |
| id          | int          | 主键          |
| page        | varchar(50)  | 页面          |
| module      | varchar(50)  | 模块          |
| sort        | int          | 排序          |
| description | varchar(255) | 说明          |
| markdown    | text         | markdown 内容 |
| is_login    | tinyint      | 是否登录显示  |
| updated_at  | timestamp    | 更新时间      |
| created_at  | timestamp    | 添加时间      |

**示例：**

| id  | page  | module  | sort | description          | markdown                            | is_login | updated_at          | created_at          |
| --- | ----- | ------- | ---- | -------------------- | ----------------------------------- | -------- | ------------------- | ------------------- |
| 1   | index | footer2 | 1    | 首页底部第二栏       | 北京市基督教海淀堂联系方式 Markdown | 0        | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |
| 2   | index | footer3 | 1    | 幻灯片试着去掉缩略图 | 北京市基督教海淀堂的二维码 Markdown | 0        | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |
| 3   | info  | list1    | 1    | 教堂简介             | 教堂简介的 Markdown                 | 0        | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |
| 4   | info  | list2    | 2    | 教牧团队             | 教牧团队的 Markdown                 | 0        | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |
| 5   | info  | list3    | 3    | 全职同工             | 全职同工的 Markdown                 | 0        | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |
| 6   | info  | list4    | 4    | 联系我们             | 联系我们的 Markdown                 | 0        | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |

### 主日预告道表设计参考

**字段说明**

<!-- 时间 markdown内容 更新时间 添加时间 -->

| 字段名     | 类型      | 说明          |
| ---------- | --------- | ------------- |
| id         | int       | 主键          |
| date       | date      | 时间          |
| markdown   | text      | markdown 内容 |
| updated_at | timestamp | 更新时间      |
| created_at | timestamp | 添加时间      |

**示例：**

| id  | date       | markdown                           | updated_at          | created_at          |
| --- | ---------- | ---------------------------------- | ------------------- | ------------------- |
| 1   | 2019-01-01 | 2019-01-01 的主日预告道的 Markdown | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |
| 2   | 2019-01-02 | 2019-01-02 的主日预告道的 Markdown | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |
| 3   | 2019-01-03 | 2019-01-03 的主日预告道的 Markdown | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |

### 主日聚会表设计参考

同主日预告道表

### 主日证道表设计参考

**字段说明**

<!-- 名称 内容 作者 缩略图 视频 说明 排序 是否显示 更新时间 添加时间 -->

| 字段名      | 类型              | 说明                               |
| ----------- | ----------------- | ---------------------------------- |
| id          | int               | 主键                               |
| title       | varchar(50)       | 名称                               |
| content     | text              | 内容                               |
| author      | varchar(50)       | 作者                               |
| thumbnail   | varchar(255) json | 缩略图 > 可以是字符串也可以是 JSON |
| video       | varchar(255) json | 视频 > 可以是字符串也可以是 JSON   |
| description | varchar(255)      | 说明                               |
| sort        | int               | 排序                               |
| is_show     | tinyint           | 是否显示                           |
| updated_at  | timestamp         | 更新时间                           |
| created_at  | timestamp         | 添加时间                           |

**示例：**

| id  | title      | content                          | author                      | thumbnail                     | video                       | description                 | sort | is_show | updated_at          | created_at          |
| --- | ---------- | -------------------------------- | --------------------------- | ----------------------------- | --------------------------- | --------------------------- | ---- | ------- | ------------------- | ------------------- |
| 1   | 2019-01-01 | 2019-01-01 的主日证道的 Markdown | 2019-01-01 的主日证道的作者 | 2019-01-01 的主日证道的缩略图 | 2019-01-01 的主日证道的视频 | 2019-01-01 的主日证道的说明 | 1    | 1       | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |

### 主日献诗表设计参考

同主日证道表设计

### 基础设置表参考

原型参考王振弟兄的 app.zip

**字段说明**

<!-- 页面 模块 说明 JSON设置信息 更新时间 添加时间 -->

| 字段名     | 类型      | 说明          |
| ---------- | --------- | ------------- |
| id         | int       | 主键          |
| page       | varchar   | 页面          |
| module     | varchar   | 模块          |
| description| varchar   | 说明          |
| json       | text      | JSON设置信息 |
| updated_at | timestamp | 更新时间      |
| created_at | timestamp | 添加时间      |

**示例：**

| id  | page  | module  | description          | json                             | updated_at          | created_at          |
| --- | ----- | ------- | -------------------- | -------------------------------- | ------------------- | ------------------- |
| 1   | index | header | 首页菜单       | 首页菜单设置的 JSON | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |
| 2   | index | left | 首页左侧快速导航       | 首页左侧快速导航的 JSON   | 2019-01-01 00:00:00 | 2019-01-01 00:00:00 |

**JSON 数据示例**

```json
[
  {
    "title": "首页",
    "url": "/index",
    "index": 1
  },
  {
    "title": "教会简介",
    "url": "/info",
    "index": 2,
    "children": [
      {
        "title": "教堂简介",
        "url": "/info/list/1",
        "index": 1
      },
      {
        "title": "教牧团队",
        "url": "/info/list/2",
        "index": 2
      },
      {
        "title": "全职同工",
        "url": "/info/list/3",
        "index": 3
      },
      {
        "title": "联系我们",
        "url": "/info/list/4",
        "index": 4
      }
    ]
  },
  {
    "title": "主日证道",
    "url": "/sermon",
    "index": 3,
  }
]
```

## 接口设计参考

### 获取基础设置数据

说明：获取菜单，快速导航等基础设置数据

关联数据库：**基础设置表**

接口路径：`/api/base` 或者 `/api/base.json`

请求方式：`GET`

返回数据：

```json
{
  "header": ["参考上方示例"],
  "left": ["参考上方示例"],
  "footer1": "footer1的Markdown内容",
  "footer2": "footer2的Markdown内容",
}
```

### 获取主日预告道数据

说明：获取主日预告道的数据

关联数据库：**主日预告道表**

接口路径：`/api/sermon/preview` 或者 `/api/sermon/preview.md`

请求方式：`GET`

返回数据：

```json
{
  "date": "2019-01-01",
  "markdown": "2019-01-01 的主日预告道的 Markdown"
}
```

### 获取主日聚会数据

说明：获取主日聚会的数据

接口路径：`/api/sermon/meeting` 或者 `/api/sermon/meeting.md`

请求方式：`GET`

返回数据：

```json
{
  "date": "2019-01-01",
  "markdown": "2019-01-01 的主日聚会的 Markdown"
}
```

### 获取主日证道数据

说明：获取主日证道的数据

关联数据库：**主日证道表**

接口路径：`/api/sermon/list` 或者 `/api/sermon/list.json`

请求方式：`GET`

返回数据：

```json
[
  {
    "id": 1,
    "title": "2019-01-01",
    "content": "2019-01-01 的主日证道的 Markdown",
    "author": "2019-01-01 的主日证道的作者",
    "thumbnail": "2019-01-01 的主日证道的缩略图",
    "video": "2019-01-01 的主日证道的视频",
    "description": "2019-01-01 的主日证道的说明",
    "sort": 1,
    "is_show": 1,
    "updated_at": "2019-01-01 00:00:00",
    "created_at": "2019-01-01 00:00:00"
  }
]
```

### 获取主日献诗数据

说明：获取主日献诗的数据

关联数据库：**主日献诗表**

接口路径：`/api/sermon/hymn` 或者 `/api/sermon/hymn.json`

请求方式：`GET`

返回数据：

```json
[
  {
    "id": 1,
    "title": "2019-01-01",
    "content": "2019-01-01 的主日献诗的 Markdown",
    "author": "2019-01-01 的主日献诗的作者",
    "thumbnail": "2019-01-01 的主日献诗的缩略图",
    "video": "2019-01-01 的主日献诗的视频",
    "description": "2019-01-01 的主日献诗的说明",
    "sort": 1,
    "is_show": 1,
    "updated_at": "2019-01-01 00:00:00",
    "created_at": "2019-01-01 00:00:00"
  }
]
```

### 获取教会简介数据

说明：获取教会简介的数据

关联数据库：**基础内容表**

接口路径：`/api/body`

请求方式：`POST`

请求参数：

```json
{
  "page": "index",
  "module": "list1"
}
```

返回参数：

```json
{
  "id": 1,
  "page": "index",
  "module": "list1",
  "sort": 1,
  "description": "教堂简介",
  "markdown": "教堂简介的 Markdown",
  "is_login": 0,
  "updated_at": "2019-01-01 00:00:00",
  "created_at": "2019-01-01 00:00:00"
}
```