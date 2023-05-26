import { categories } from '@/constants'
import fetchNews from '@/lib/fetchNews'
import React from 'react'

type Props = {}

function HomePage({ }: Props) {

  // const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>HomePage</div>
  )
}

export default HomePage