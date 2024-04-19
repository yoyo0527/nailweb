// Homepage.js
import React, { useRef, useState } from 'react';
import { HeadingLevel, Heading } from 'baseui/heading';
import { Button } from 'baseui/button';
import { FileUploader } from 'baseui/file-uploader';
import './App.css';
import naillogo from './photo/handlogo.png';
import { useNavigate } from 'react-router-dom';
import loading from './photo/loading.gif';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function useInterval(callback, delay) {
    const savedCallback = React.useRef(() => {});

    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
        function tick() {
        savedCallback.current();
        }
        if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
        }
    }, [delay]);
}

function useFakeProgress() {
    const [fakeProgress, setFakeProgress] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    
    function stopFakeProgress() {
        setIsActive(false);
        setFakeProgress(0);
    }

    function startFakeProgress() {
        setIsActive(true);
    }

    useInterval(() => {
        if (fakeProgress >= 100) {
        stopFakeProgress();
        } else {
        setFakeProgress(fakeProgress + 100);
        }
    }, isActive ? 500 : null);
    
    // console.log('fakeProgress:', fakeProgress);
    // console.log('isActive:', isActive);
  
    return [fakeProgress, startFakeProgress, stopFakeProgress];
}

const Homepage = () => {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const [progressAmount, startFakeProgress, stopFakeProgress] = useFakeProgress();
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const handleDrop = (acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            const successfile = '已上傳圖片:' + acceptedFiles[0].name;
            setFile(acceptedFiles[0]);
            startFakeProgress();
            console.log(successfile);
            setResult(successfile);
        }
    };
      
    const handleUpload = async () => {
        if (!file) {
            Swal.fire('Mistake', '請先選擇圖片!', 'error');
            return;
        }
        Swal.fire('Correct', '已上傳辨識!', 'success');
        // setLoad(loading);
        // setResult('辨識中...');
        MySwal.fire({
                        text: '辨識中...(辨識完畢將會自動跳轉頁面',
                        imageUrl: loading,
                        showConfirmButton: false,
                    })
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://4f31f73d.r3.cpolar.top/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);

            if (data){
                Swal.fire('Correct', '辨識完畢!', 'success');
                if (data.prediction === 'Onychomycosis') {
                    navigate('Onychomycosis');
                }else if(data.prediction === 'beau_s') {
                    navigate('beau_s');
                }else if(data.prediction === 'black_line') {
                    navigate('black_line');
                }else if(data.prediction === 'clubbing') {
                    navigate('clubbing');
                }else if(data.prediction === 'healthy nail') {
                    navigate('healthy_nail');
                }else if(data.prediction === 'onycholysis') {
                    navigate('onycholysis');
                }else if(data.prediction === 'white spot') {
                    navigate('white_spot');
                }else{
                    Swal.fire('Mistake', '上傳辨識失敗!', 'error');
                }
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            Swal.fire('Mistake', '上傳辨識失敗!', 'error');
            setResult('上傳辨識失敗...');    
        }
    };

    const width = 300;
    const height = 400;
    const cameraRef = useRef(null);
    const handleOpenCamera = () => {
    navigator.mediaDevices
        .getUserMedia({
        video: {
            width,
            height,
            audio: false,
            deviceId: "default",
            facingMode: "user",
        },
        })
        .then((stream) => {
            let video = cameraRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch((err) => {
            console.error("error:", err);
        });
    };

    const photoRef = useRef(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const handleTakePhoto = () => {
        const target = photoRef.current;
        const ctx = target.getContext("2d");
        target.width = width;
        target.height = height;
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(cameraRef.current, 0, 0, width, height);
        // 獲取 Canvas 上的圖像數據
        const imageDataURL = target.toDataURL();
        setCapturedPhoto(imageDataURL);
    };

    const handleSavePhoto = () => {
        // 將 capturedPhoto 轉換為 Blob 對象
        const byteCharacters = atob(capturedPhoto.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/png' });

        // 創建下载連結
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'nail.png';

        // 模擬下載連結
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div className="app-container">

            <div className="flex-container">
                <HeadingLevel>
                <img src={naillogo} alt='Nail Logo' className='nail_logo'></img>
                <h1 style={{color:'white'}}>真甲難辨</h1>
                </HeadingLevel>
            </div>

            <div className="flex-middle">

                <div className='camera'>
                    <video ref={cameraRef} width={width} height={height}></video>
                    <Button onClick={handleOpenCamera}>打開相機</Button>
                </div>

                <div className='camera'>
                    <canvas ref={photoRef} width={width} height={height}></canvas>
                    <Button onClick={handleTakePhoto}>拍照</Button>
                    <Button onClick={handleSavePhoto}>保存照片</Button>
                </div>

                <div className='camera'>
                    <FileUploader 
                        onDrop={handleDrop} 
                        onCancel={stopFakeProgress} 
                        progressAmount={progressAmount} 
                        progressMessage={
                            progressAmount
                            ? `Uploading... ${progressAmount}% of 100%`
                            : ''
                        
                        }
                        className='FileUploader'
                    />
                    <h3>{result}</h3>
                    <Button onClick={handleUpload}>上傳辨識</Button>
                </div>

            </div>

        </div>
    );
};

export default Homepage;
