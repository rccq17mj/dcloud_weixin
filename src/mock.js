import Mock from "mockjs"
console.log("adsd")
Mock.mock("http://localhost:8000/products.json",{
    "list|1-10":[
        {
            'id':"@id",
            "icon": 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            "text":"@cword(3,5)"
        }
    ]
})