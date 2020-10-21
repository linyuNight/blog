const express = require('express')
var compression = require('compression')
const path = require('path');
const { send } = require('process');
const app = express()

const mysql = require('mysql')
// const coon = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'root',
//   port: '3333',
//   database: 'user_test'
// })

// coon.connect((err) => {
//   if (err) {
//     console.log('err', err)
//   }
// })
// const sql = 'select * from user'
// coon.query(sql, (err, result) => {
//   if (err) throw err
//   console.log(result)
// })

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  port: '3333',
  database: 'user_test'
})

pool.getConnection((err, coon) => {
  if (err) throw err
  const sql = 'select * from user'
  coon.query(sql, (err, result) => {
    coon.release()
    if (err) throw err
    console.log(result)
  })
})

app.use(compression());
// path.join(__dirname, 'public') 表示工程路径后面追加 public
app.use(express.static(path.resolve(__dirname, '../', 'dist')))

// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   // Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   next();
// })

app.get('/ioio', (req, res) => {
  console.log(222)
  throw new Error('hhh');
  // res.send('222')
})

// 错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})

app.use((req, res, next) => {
  res.status(404).send('111')
})

app.get('/bar', (res, req) => {
  req.send({
    bar: {
      xData: ['衬衫衬衫衬衫衬衫衬', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '衬衫衬衫衬衫衬衫衬', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '衬衫衬衫衬衫衬衫衬', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '衬衫衬衫衬衫衬衫衬', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      seriesData: [
        {
          name: '销量',
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
        },
        {
          name: '销量1',
          data: [4, 26, 36, 10, 10, 20, 4, 26, 36, 10, 10, 20, 4, 26, 36, 10, 10, 20, 4, 26, 36, 10, 10, 20]
        },
        {
          name: '销量2',
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
        }
      ]
    }
  })
})

app.get('/bar2', (res, req) => {
  req.send({
    bar: {
      xData: ['1月', '2月', '3月', '4月'],
      seriesData: [
        {
          name: '月中',
          data: [1, 2, 4, 3]
        },
        {
          name: '月末',
          data: [3, 2, 3, 4]
        }
      ]
    }
  })
})

app.get('/bar/over', (res, req) => {
  req.send({
    bar: {
      xData: ['衬衫衬衫衬衫衬衫衬', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '衬衫衬衫衬衫衬衫衬', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '衬衫衬衫衬衫衬衫衬', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '衬衫衬衫衬衫衬衫衬', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      seriesData: [
        {
          name: '销量',
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
        }
      ]
    }
  })
})

app.get('/pie', (res, req) => {
  req.send({
    pie: {
      seriesData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 10, name: '视频广告' },
        { value: 348, name: '搜索引擎' }
      ]
    }
  })
})

app.get('/pie/bottom', (res, req) => {
  req.send({
    pie: {
      seriesData: [
        { value: 335, name: '直接访问2' },
        { value: 310, name: '邮件营销2' },
        { value: 234, name: '联盟广告2' },
        { value: 10, name: '视频广告2' },
        { value: 348, name: '搜索引擎2' }
      ]
    }
  })
})

app.get('/gauge', (res, req) => {
  req.send({
    gauge: {
      value: 90
    }
  })
})

app.get('/ttt', (res, req) => {
  setTimeout(() => {
    req.send([{ value: '1234' }, { value: '12' }, { value: '1' }])
  }, 1000)
})

app.get('/api/a', (res, req) => {
  setTimeout(() => {
    req.send([{ value: 'api' }, { value: '12' }, { value: '1' }])
  }, 1000)
})

app.get('/test/b', (res, req) => {
  setTimeout(() => {
    req.send([{ value: 'testb' }, { value: '12' }, { value: '1' }])
  }, 1000)
})

app.listen(3000, () => {
  console.log('App listening at port 3000')
})
