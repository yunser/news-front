<template>
    <my-page title="热榜" :page="page">
        <div class="common-container container">
            <div class="sections">
                <section class="section">
                    <h2 class="section-title">微博热搜</h2>
                    <div class="article-box">
                        <ul class="news-list">
                            <li class="item" v-for="article, index in articles">
                                <a class="link" :href="article.url" target="_blank">
                                    <div class="index">{{ index + 1 }}</div>
                                    <div class="title">
                                        {{ article.title }}
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="section">
                    <h2 class="section-title">V2EX 热门</h2>
                    <div class="article-box">
                        <ul class="news-list">
                            <li class="item" v-for="article, index in articles2">
                                <a class="link" :href="article.url" target="_blank">
                                    <div class="index">{{ index + 1 }}</div>
                                    <div class="title">
                                        {{ article.title }}
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="section">
                    <h2 class="section-title">知乎热搜</h2>
                    <div class="article-box">
                        <ul class="news-list">
                            <li class="item" v-for="article, index in articles4">
                                <a class="link" :href="article.url" target="_blank">
                                    <div class="index">{{ index + 1 }}</div>
                                    <div class="title">
                                        {{ article.title }}
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="section">
                    <h2 class="section-title">百度热点</h2>
                    <div class="article-box">
                        <ul class="news-list">
                            <li class="item" v-for="article, index in articles3">
                                <a class="link" :href="article.url" target="_blank">
                                    <div class="index">{{ index + 1 }}</div>
                                    <div class="title">
                                        {{ article.title }}
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="section">
                    <h2 class="section-title">Github 趋势</h2>
                    <div class="article-box">
                        <ul class="news-list">
                            <li class="item" v-for="article, index in articles5">
                                <a class="link" :href="article.url" target="_blank">
                                    <div class="index">{{ index + 1 }}</div>
                                    <div class="title">
                                        {{ article.title }}
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </my-page>
</template>

<script>
    import {timeFilter, commonTimeFilter} from '@/util/filter'
    import {cms} from '@/config'
    // const moment = window.moment

    export default {
        data () {
            return {
                pagination: {
                    page: 1,
                    totalPage: 1
                },
                articles: [],
                articles2: [],
                articles3: [],
                articles4: [],
                articles5: [],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/03bdab7071b211e99d88eb27f1f9e986',
                            target: '_blank',
                            title: '帮助'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com/',
                            target: '_blank',
                            title: '应用'
                        }
                        // {
                        //     type: 'icon',
                        //     icon: 'help',
                        //     to: '/help'
                        // }
                    ]
                }
            }
        },
        mounted() {
            this.hostname = location.hostname
            console.log('cms', cms)
            // this.title = document.title = cms.siteName
            this.loadData()

            window.addEventListener('keydown', this.keyDown = e => {
                console.log(e.keyCode)
                if (e.keyCode === 69) {
                    this.$router.push('/admin2')
                }
            })
        },
        destroyed() {
            window.removeEventListener('keydown', this.keyDown)
        },
        methods: {
            loadData() {
                this.$http.get(`/site/subscribes/weibo`).then(
                    response => {
                        let data = response.data
                        this.articles = data.slice(0, 10)
                    },
                    response => {
                        console.log(response)
                    })
                this.$http.get(`/site/subscribes/v2ex`).then(
                    response => {
                        let data = response.data
                        this.articles2 = data.slice(0, 10)
                    },
                    response => {
                        console.log(response)
                    })
                this.$http.get(`/site/subscribes/baidu`).then(
                    response => {
                        let data = response.data
                        this.articles3 = data.slice(0, 10)
                    },
                    response => {
                        console.log(response)
                    })
                this.$http.get(`/site/subscribes/zhihu`).then(
                    response => {
                        let data = response.data
                        this.articles4 = data.slice(0, 10)
                    },
                    response => {
                        console.log(response)
                    })
                this.$http.get(`/site/subscribes/github`).then(
                    response => {
                        let data = response.data
                        this.articles5 = data.slice(0, 10)
                    },
                    response => {
                        console.log(response)
                    })
            },
            loadMore() {
                this.pagination.page++
                this.loadData()
            },
            commonTimeFilter
        },
        filters: {
            timeFilter,
        }
    }
</script>

<style lang="scss" scoped>
.sections {
    // display: flex;
}
.section {
    margin-right: 16px;
}
.section-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
}
.page-home {
    background-color: #eee;
}
.slogan {
    font-size: 32px;
    margin-bottom: 16px;
}
.article-box {
    background-color: #fff;
}
.news-list {
    margin-bottom: 24px;
    .item {
        display: flex;
        align-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .12);
    }
    .link {
        display: flex;
        // align-items: center;
    }
    .index {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        line-height: 24px;
        margin-right: 8px;
        text-align: center;
        color: #fff;
        background-color: #f00;
    }
    .title {
        // margin-bottom: 16px;
        font-size: 16px;
        font-weight: bold;
        color: #333;
    }
    .top {
        margin-right: 8px;
    }
    .meta {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }
    .avatar {
        display: block;
        width: 16px;
        height: 16px;
        margin-right: 4px;
        border-radius: 50%;
    }
    .user-name {
        color: #666;
        margin-right: 16px;
    }
    .time {
        color: #999;
    }
    .tag {
        margin-right: 8px;
    }
}
.more {
    margin-top: 16px;
}
.icp {
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;
}
</style>
