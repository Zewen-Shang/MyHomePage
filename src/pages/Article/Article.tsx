import React from 'react';
import {PageHeader} from "antd";

import background from "../../static/banner.png";
import vscode from "../../static/vscode.jpg";
import "./Article.css"

class Article extends React.Component<{},{}>{
    render():JSX.Element{
        return (
            <React.Fragment>
                <div className="background" >
                    <img src={background}/>
                </div>

                <div className="Article-container">
                    {/* <div className="Article-banner">
                        <img src={vscode} />
                    </div> */}
                    <div className="text">
                    <PageHeader
                        backIcon={false}
                        title={<h1>VScode C++ 踩坑记录</h1>}
                        subTitle="对于launch.json,tasks,json的介绍"
                    />
                    <div>
                    解决方法有很多,如果可以对html改动的话,就给你需要细化的页面元素加多一个class或者ID就行了,当然这种方法应该不是...
更多关于不同css文件 命名冲突的问题>>
百度知道 - 百度快照
为您推荐：如何解决css样式冲突css样式被覆盖怎么解决样式冲突怎么解决
样式冲突css冲突两个style冲突样式冲突修复何为样式冲突
【css命名冲突 vue】-博文推荐-CSDN博客
2019年11月9日 - CSDN提供了精准css命名冲突 vue信息,主要包含: css命名冲突 vue信等内容,查询最新最全的css命名冲突 vue信解决方案,就上CSDN热门排行榜频道.
CSDN技术社区 - 百度快照
css命名冲突解决方法
2018年9月3日 - css的命名冲突目前有几种解决方法:1.命名约定人为的制定一下命名规则以避免冲突,例如前缀,嵌套等2.CSS in JS在JavaScript中写CSS,使用工具编译为css,...
https://www.bbsmax.com/A/WpdK0...  - 百度快照
解决方法有很多,如果可以对html改动的话,就给你需要细化的页面元素加多一个class或者ID就行了,当然这种方法应该不是...
更多关于不同css文件 命名冲突的问题>>
百度知道 - 百度快照
为您推荐：如何解决css样式冲突css样式被覆盖怎么解决样式冲突怎么解决
样式冲突css冲突两个style冲突样式冲突修复何为样式冲突
【css命名冲突 vue】-博文推荐-CSDN博客
2019年11月9日 - CSDN提供了精准css命名冲突 vue信息,主要包含: css命名冲突 vue信等内容,查询最新最全的css命名冲突 vue信解决方案,就上CSDN热门排行榜频道.
CSDN技术社区 - 百度快照
css命名冲突解决方法
2018年9月3日 - css的命名冲突目前有几种解决方法:1.命名约定人为的制定一下命名规则以避免冲突,例如前缀,嵌套等2.CSS in JS在JavaScript中写CSS,使用工具编译为css,...
https://www.bbsmax.com/A/WpdK0...  - 百度快照
解决方法有很多,如果可以对html改动的话,就给你需要细化的页面元素加多一个class或者ID就行了,当然这种方法应该不是...
更多关于不同css文件 命名冲突的问题>>
百度知道 - 百度快照
为您推荐：如何解决css样式冲突css样式被覆盖怎么解决样式冲突怎么解决
样式冲突css冲突两个style冲突样式冲突修复何为样式冲突
【css命名冲突 vue】-博文推荐-CSDN博客
2019年11月9日 - CSDN提供了精准css命名冲突 vue信息,主要包含: css命名冲突 vue信等内容,查询最新最全的css命名冲突 vue信解决方案,就上CSDN热门排行榜频道.
CSDN技术社区 - 百度快照
css命名冲突解决方法
2018年9月3日 - css的命名冲突目前有几种解决方法:1.命名约定人为的制定一下命名规则以避免冲突,例如前缀,嵌套等2.CSS in JS在JavaScript中写CSS,使用工具编译为css,...
https://www.bbsmax.com/A/WpdK0...  - 百度快照
解决方法有很多,如果可以对html改动的话,就给你需要细化的页面元素加多一个class或者ID就行了,当然这种方法应该不是...
更多关于不同css文件 命名冲突的问题>>
百度知道 - 百度快照
为您推荐：如何解决css样式冲突css样式被覆盖怎么解决样式冲突怎么解决
样式冲突css冲突两个style冲突样式冲突修复何为样式冲突
【css命名冲突 vue】-博文推荐-CSDN博客
2019年11月9日 - CSDN提供了精准css命名冲突 vue信息,主要包含: css命名冲突 vue信等内容,查询最新最全的css命名冲突 vue信解决方案,就上CSDN热门排行榜频道.
CSDN技术社区 - 百度快照
css命名冲突解决方法
2018年9月3日 - css的命名冲突目前有几种解决方法:1.命名约定人为的制定一下命名规则以避免冲突,例如前缀,嵌套等2.CSS in JS在JavaScript中写CSS,使用工具编译为css,...
https://www.bbsmax.com/A/WpdK0...  - 百度快照
解决方法有很多,如果可以对html改动的话,就给你需要细化的页面元素加多一个class或者ID就行了,当然这种方法应该不是...
更多关于不同css文件 命名冲突的问题>>
百度知道 - 百度快照
为您推荐：如何解决css样式冲突css样式被覆盖怎么解决样式冲突怎么解决
样式冲突css冲突两个style冲突样式冲突修复何为样式冲突
【css命名冲突 vue】-博文推荐-CSDN博客
2019年11月9日 - CSDN提供了精准css命名冲突 vue信息,主要包含: css命名冲突 vue信等内容,查询最新最全的css命名冲突 vue信解决方案,就上CSDN热门排行榜频道.
CSDN技术社区 - 百度快照
css命名冲突解决方法
2018年9月3日 - css的命名冲突目前有几种解决方法:1.命名约定人为的制定一下命名规则以避免冲突,例如前缀,嵌套等2.CSS in JS在JavaScript中写CSS,使用工具编译为css,...
https://www.bbsmax.com/A/WpdK0...  - 百度快照
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Article;