export default function BtnEvents()
{
    return(
        <Toolbar
        onPlayMovie={()=>alert('PlayingMovie!')}
        onUploadImage={()=>alert('UploadingImage!')}
        />
    );
}
function Toolbar({onPlayMovie,onUploadImage})
{
    return(
        <div>
            <Button onClick={onPlayMovie}>
                PlayMovie
            </Button>
            <Button onClick={onUploadImage}>
                UploadingImage
            </Button>
        </div>
    );
}
functiopn Button({onclick,Children}){
    return(
        <button onClick={onClick}>
            {Children}
        </button>
    );
}