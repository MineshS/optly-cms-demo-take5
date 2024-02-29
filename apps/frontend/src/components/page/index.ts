import type { ComponentTypeDictionary } from '@remkoj/optimizely-dxp-react'
import type { FunctionComponent } from 'react'
import LandingPage from "./landing-page"
import ArticlePage from './article-page'
import ArticlePageBlock from './article-page/block'

export const Pages : ComponentTypeDictionary = [
    {
        type: ['Page', 'ArticlePage'],
        component: ArticlePage as FunctionComponent
    },
]
export default Pages