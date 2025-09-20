// 封装获取频道列表的逻辑
import { useEffect, useState } from 'react'
import { getChannelAPI } from '@/apis/article'

export function useChannel() { 
    // 获取频道列表
        const [channelList, setChannelList] = useState([])
        useEffect(() => {
            const getChannelList = async () => {
                const res = await getChannelAPI()
                setChannelList(res.data.channels)
            }
            getChannelList()
        }, [])
    return { channelList }
}