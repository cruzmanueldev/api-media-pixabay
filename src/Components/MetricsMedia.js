import React from 'react'
import {
    EyeOutlined,
    HeartOutlined,
    CloudDownloadOutlined,
    CommentOutlined,
    LinkOutlined
} from '@ant-design/icons';

const MetricsMedia = ({media}) => {

    const numberFormat = (num) => {
        if (num >= 1_000_000_000_000) {
            return (num / 1_000_000_000_000).toFixed(0) + "T";
        } else if (num >= 1_000_000_000) {
            return (num / 1_000_000_000).toFixed(0) + "B";
        } else if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(0) + "M";
        } else if (num >= 1_000) {
            return (num / 1_000).toFixed(0) + "K";
        } else {
            return num.toString();
        }
    }

    return (
        <div className='container-metrics-image'>
            <div><EyeOutlined />{numberFormat(media.views)}</div>
            <div><HeartOutlined />{numberFormat(media.likes)}</div>
            <div><CommentOutlined />{numberFormat(media.comments)}</div>
            <div><CloudDownloadOutlined />{numberFormat(media.downloads)}</div>
            <div>
                <a target='_blank' rel="noreferer noreferrer" className='container-url-image' href={media.pageURL}>
                    <LinkOutlined />
                </a>
            </div>
        </div>
    )
}

export default MetricsMedia