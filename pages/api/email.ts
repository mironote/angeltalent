import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        const keys = Object.keys(req.body)

        let content = ''

        content += new Date().toTimeString() + '\n'

        keys.forEach((key) => {
            content += `${key} : ${req.body[key]}` + '\n'
        })

        content += '----------------------------------------\n'

        const fileName = 'email-list.txt' // 定义文件名
        const filePath = `${process.cwd()}/public/${fileName}` // 定义文件路径

        try {
            await fs.promises.writeFile(filePath, content, { flag: 'a' }) // 写入文件

            res.status(200).json({ message: 'Success' })
        } catch (err) {
            res.status(500).json({ message: 'Failed' })
        }
    }
}
