import './Main/Main.css'
import Stack from './Main/Stack'

function 광(){
    return(
        <span title='狂'>광</span>
    )
}

export default function Main(){
    return(
        <>
            <main>
                <h2>프론트엔드 개발자 이<광 />민</h2>
                <h3><광 />기의 개발자</h3>
                <div className='container'>
                    <div>
                        <h4>Stack</h4>
                        <Stack />
                    </div>
                </div>
            </main>
        </>
    )
}