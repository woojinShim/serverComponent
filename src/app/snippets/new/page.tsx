import  { db } from '@/db';
import {redirect} from 'next/navigation'

export default function SnippetCreatePage() {
    async function createSnippet(formData: FromData) {
        'use server'
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;        

        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        })
        console.log(snippet)

        redirect('/')
    }
    return <form action={createSnippet}>
        <h3 className="font-bold m-3">Create a Snippet</h3>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <label className="w-12" htmlFor="title">Title</label>
                <input name="title" className='border rouned p-2 w-full' id='title'></input>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <label className="w-12" htmlFor="code">Code</label>
                <input name="code" className='border rouned p-2 w-full' id='code'></input>
            </div>
        </div>

        <button type="submit" className='rouneded p-2 bg-blue-200'>Create</button>
    </form>
}