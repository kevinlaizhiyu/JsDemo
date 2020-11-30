const fs = require('fs');
const path = require('path')

const deepth = 1;
const fileType = '';

const tree = {
    'node01.js':{
        'deepth':1,
        'type':'file',
        'contents':'',
    },
    'node02':{
        'deepth':1,
        'type':'dir',
        'contents':{
            'react.js':{
                'deepth':2,
                'type':'file',
                'contents':''
            },
            'Vue':{
                'deepth':2,
                'type':'dir',
                'contents':{

                }
            }
        }
    },
    'node03.js':{
        'deepth':1,
        'type':'file',
        'contents':''
    },
    'node04js':{
        'deepth':1,
        'type':'file',
        'contents':''
    },
}
console.log(`
'|'
'----'
' '
tree
|----node.js
|----node02
|    |----react.js
|    |----Vue
|         |----vue.js
|         |----vue.js
|         |----vue.js
|         |    |----tt.js 
|         |    |----tt.js 
|         |    |----tt.js 
|         |         |----tt.js
|         |         |----tt.js
|         |         |----tt.js
|         |         |----tt.js
|         |         |----tt.js
|         |----vue.js
|         |----vue.js
|         |----vue.js
|         |----vue.js
|         |----vue.js
|         |----vue.js
|----node03
|----node04

`
)

// 1.生成数据
// 2.根据生成的数据进行打印
