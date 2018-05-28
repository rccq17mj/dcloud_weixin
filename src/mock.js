import fetchMock from "fetch-mock"
import Mock from "mockjs"

fetchMock.get("*",Mock.mock({
    'list|1-10':[
        {
            'id':"@id",
            'text':"@cword(3,5)",
            'icon':'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
        }
    ]
}))