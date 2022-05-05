import {useEffect} from 'react'
import WriteActionButtons from '../../components/write/WriteActionButtons'
import {useSelector, useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {updatePost, writePost} from '../../modules/write'

const WriteActionButtonsContainer = ({history}) => {
    const dispatch = useDispatch()
    const {title, body, tags, post, postError, originalPostId} = useSelector(
        ({write}) => ({
            title: write.title,
            body: write.body,
            tags: write.tags,
            post: write.post,
            postError: write.postError,
            originalPostId: write.originalPostId,
        }),
    )

    // 포스트 등록
    const onPublish = () => {
        if (originalPostId) {
            dispatch(updatePost({title, body, tags, id: originalPostId}));
            return;
        }

        dispatch(
            writePost({
                title,
                body,
                tags,
            }),
        )
    }

    // 취소
    const onCancel = () => {
        history.goBack()
    }

    // 성공 / 실패 시 작업
    useEffect(() => {
        if (post) {
            const {_id, user} = post
            history.push(`/@${user.username}/${_id}`)
        }
        if (postError) {
            console.error(postError)
        }
    }, [history, post, postError])

    return (
        <WriteActionButtons
            onPublish={onPublish}
            onCancel={onCancel}
            isEdit={!!originalPostId}
        />
    )
}

export default withRouter(WriteActionButtonsContainer)
