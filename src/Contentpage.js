//Contentpage.js
import React, { useEffect } from 'react';import './App.css';
import onychomycosis from './photo/Onychomycosis.jpg';
import whitespotpage from './photo/whitespotpage.jpg';
import beau_s from './photo/Beau_s.webp';
import blackline from './photo/blackline.webp';
import clubbing from './photo/Clubbing.webp';
import healthy_nail from './photo/healthy.jpg';
import onycholysis from './photo/onycholysis.jpg'
import onycholysis2 from './photo/onycholysis2.jpg'
import { useNavigate } from 'react-router-dom';
import { Button } from 'baseui/button';
import './App.css';

export function Whitespot() {
    useEffect(() => {
        document.body.classList.add('custom-background');
        return () => {
            document.body.classList.remove('custom-background');
        };
    });

    const navigate = useNavigate();
    const backtohome = ()=>{
        navigate('/');
    };
    return (
        <div className='page_body' style={{color:'white'}}>
                <h1>辨識結果:白點(white spot)</h1>
                <img src={whitespotpage} className='insidepic'></img>
                <p style={{fontSize:'30px', fontWeight:'bold'}}>改善方式︰</p>
                <p style={{fontSize:'20px'}}>1.多吃綠色蔬菜、小魚乾、傳統豆腐、芝麻...等。</p>
                <p style={{fontSize:'20px'}}>2.改善睡眠品質︰睡前1小時泡腳15分鐘，可以幫助睡眠。</p>
                資料來源:<a href="https://www.edh.tw/article/17488">指甲有小白點？可能是缺鈣、氣血不足！</a>
                <Button onClick={backtohome}  style={{display: 'block', margin: '0 auto' }}>回到首頁</Button>
        </div>
    );
};

export function Onychomycosis() {
    useEffect(() => {
        document.body.classList.add('custom-background');
        return () => {
            document.body.classList.remove('custom-background');
        };
    });

    const navigate = useNavigate();
    const backtohome = ()=>{
        navigate('/');
    };
    return (
        <div className='page_body' style={{color:'white'}}>
                <h1>辨識結果:灰指甲(Onychomycosis)</h1>
                <img src={onychomycosis} className='insidepic'></img>
                <p style={{fontSize:'30px', fontWeight:'bold'}}>一、什麼是灰指甲?</p>
                <p style={{fontSize:'20px'}}>灰指甲是指甲或趾甲受黴菌感染，而引起的指甲變色、變形、增厚、脫屑粗糙、易碎指甲分離等現象。</p>
                <p style={{fontSize:'30px', fontWeight:'bold'}}>二、哪些人比較容易得灰指甲？</p>
                <p style={{fontSize:'20px'}}>(1)年齡稍大及免疫能力降低的人，比較容易受黴菌感染。</p>
                <p style={{fontSize:'20px'}}>(2)洗滌業（如洗車、清潔人員）、美髮業、甚至家庭主婦都比較有機會得到灰指甲。</p>
                <p style={{fontSize:'20px'}}>(3)另外身體其他部位有黴菌感染而未治療，也有可能由皮膚擴散到指甲而得到灰指甲。如很多患者都是由香港腳傳染。</p>
                <p style={{fontSize:'30px', fontWeight:'bold'}}>三、什麼情況下比較容易得到灰指甲？</p>
                <p style={{fontSize:'20px'}}>(1)指甲受到外傷或撞擊，會形成黴菌侵入的缺口。</p>
                <p style={{fontSize:'20px'}}>(2)不喜歡清洗手腳、不按時修剪指甲也會提高得病的機會。</p>
                <p style={{fontSize:'20px'}}>(3)清除指甲油的去光水，也會使指甲較脆弱抵抗力降低。</p>
                <p style={{fontSize:'30px', fontWeight:'bold'}}>四、灰指甲的正確治療</p>
                <p style={{fontSize:'20px'}}>(1)口服抗黴菌藥，手指甲受感染者須服用六週，腳指甲需服用十二週，而且必須每天持續服用，不可間斷。停藥後分別觀察三至六個月及六至九個月，新長的指甲可成為正常的指甲，治愈率可達九成。口服藥物有些患者不適合服用，例如孕婦或是肝功能異常者（包括肝炎、脂肪肝或肝硬化），因此健康患者服用抗黴菌用藥時，一個月要抽血檢查一次肝功能指數。另外口服抗黴菌藥物與許多藥物都有交互或加乘作用，所以患者在就診前須確實告知正在使用的藥物，或是服用抗黴菌藥期間看其他疾病時，要告知醫師。</p>
                <p style={{fontSize:'20px'}}>(2)外用藥物分為水楊酸類藥和抗黴菌藥膏，水楊酸因具有較強的穿透性，兼具殺菌效果，外用藥依指示塗抹，而使用前注意應先將患部清洗乾淨以加強藥物效果，須持續半年以上的時間，遠比吃藥的時間久，而且療效只有六成左右，好處是幾乎沒有什麼副作用，肝功能不好患者可使用。</p>
                <p style={{fontSize:'30px', fontWeight:'bold'}}>五、如何預防感染灰指甲？</p>
                <p style={{fontSize:'20px'}}>(1)指甲剪，只要用過的人當中有灰指甲患者，就可能仍有少數黴菌殘留刀鋒上，而傳染給其他患者,所以使用後要清洗乾淨。</p>
                <p style={{fontSize:'20px'}}>(2)避免指甲的外傷及化學藥劑的刺激（包括去光水）。指甲受傷要趕快處理，指甲常因受傷或細菌感染而發炎，導致指甲變形有縫隙，使黴菌得以侵入而導致灰指甲。</p>
                <p style={{fontSize:'20px'}}>(3)皮膚有黴菌感染（尤其香港手、香港腳）時，應儘速就醫，做徹底的治療，以免黴菌傳染到指甲。</p>
                <p style={{fontSize:'30px', fontWeight:'bold'}}>六、日常生活應注意：</p>
                <p style={{fontSize:'20px'}}>(1)穿著通風透氣、吸汗強的棉質襪，每天更換清洗，甚至一天換穿幾雙。</p>
                <p style={{fontSize:'20px'}}>(2)應避免穿膠鞋或不透氣的球鞋，最好有兩雙以上的鞋子交換穿著，使每一雙鞋都有足夠的時間可以晾乾。在家中最好赤腳或穿拖鞋或涼鞋。</p>
                <p style={{fontSize:'20px'}}>(3)不與他人共穿鞋子、拖鞋及襪子。（買鞋時請勿以赤腳試穿鞋，以免遭受感染）</p>
                <p style={{fontSize:'20px'}}>(4)腳底、趾間癢儘量不要用手抓，以防傳染於手指。</p>
                <p style={{fontSize:'20px'}}>(5)沐浴後應把腳趾擦乾，尤其是趾縫等較易被忽略的地方。</p>
                <p style={{fontSize:'20px'}}>(6)身體其他部位有黴菌感染時，應及早治療以免互相傳染。</p>
                <p style={{fontSize:'20px'}}>(7)治癒後使用過的襪子及脫鞋應拋棄，避免二次感染。</p>
                <p style={{fontSize:'20px'}}>(8)注意較容易潮濕環境的清潔，如公共浴室及家中廚房、浴室地面，接觸後保持手腳清潔及乾燥。</p>
                資料來源:<a href="https://www.rah.com.tw/page/news/show.aspx?num=227&lang=TW" style={{padding:0}}>仁愛醫院</a>
            
                <Button onClick={backtohome}  style={{display: 'block', margin: '0 auto' }}>回到首頁</Button>
        </div>
    );
};

export function Beau_s() {
    useEffect(() => {
        document.body.classList.add('custom-background');
        return () => {
            document.body.classList.remove('custom-background');
        };
    });

    const navigate = useNavigate();
    const backtohome = ()=>{
        navigate('/');
    };
    return (
        <div className='page_body' style={{color:'white'}}>
            <h1>辨識結果:博氏線(Beau_s line)</h1>
            <img src={beau_s} className='insidepic'></img>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>介紹︰</p>
            <p style={{fontSize:'20px'}}>博氏線會有凹痕或凹陷，指甲表面可能變得粗糙或不光滑。</p>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>造成博氏線可歸因為以下4項:</p>
            <p style={{fontSize:'20px'}}>1.近期患有重病、承受重大壓力或罹患特定疾病，造成身體營養及能量無法傳送至末端指甲。</p>
            <p style={{fontSize:'20px'}}>2.指甲基質受到壓迫，導致指甲生長冒出凹痕。</p>
            <p style={{fontSize:'20px'}}>3.患有嚴重皮膚問題，損害指甲基質。</p>
            <p style={{fontSize:'20px'}}>4.缺乏特定營養素，影響指甲生成。</p>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>對照上述4成因，以下有更詳細的解釋:</p>
            <p style={{fontSize:'20px'}}>1.身體疾病</p>
            <ul>
                <li style={{fontSize:'20px'}}>肺炎</li>
                <li style={{fontSize:'20px'}}>鏈球菌感染</li>
                <li style={{fontSize:'20px'}}>腮腺炎</li>
                <li style={{fontSize:'20px'}}>麻疹</li>
                <li style={{fontSize:'20px'}}>長時間高燒</li>
                <li style={{fontSize:'20px'}}>心臟病</li>
                <li style={{fontSize:'20px'}}>新冠肺炎</li>
                <li style={{fontSize:'20px'}}>糖尿病</li>
                <li style={{fontSize:'20px'}}>甲狀腺低下</li>
                <li style={{fontSize:'20px'}}>週邊血管疾病</li>
                <li style={{fontSize:'20px'}}>雷諾氏現象</li>
            </ul>
            <p style={{fontSize:'20px'}}>2.指甲基質受外在因素影響</p>
            <ul>
                <li style={{fontSize:'20px'}}>指甲基質受重物壓迫</li>
                <li style={{fontSize:'20px'}}>暴露於嚴寒環境</li>
                <li style={{fontSize:'20px'}}>做指甲感染或不當修剪指甲</li>
            </ul>
            <p style={{fontSize:'20px'}}>3.皮膚疾病</p>
            <ul>
                <li style={{fontSize:'20px'}}>濕疹</li>
                <li style={{fontSize:'20px'}}>乾癬</li>
            </ul>
            <p style={{fontSize:'20px'}}>4.缺乏特定營養素</p>
            <ul>
                <li style={{fontSize:'20px'}}>缺乏鋅</li>
                <li style={{fontSize:'20px'}}>缺乏蛋白質</li>
            </ul>
            <p style={{fontSize:'20px'}}>嚴重的精神壓力如離婚、家人去世、失業或是焦慮症等心理疾病，也可能影響指甲健康，造成博氏線的出現。</p>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>指甲有橫紋怎麼辦？</p>
            <p style={{fontSize:'20px'}}>可先藉由橫紋的數量和粗細，初步判斷可能原因。若只有某片指甲出現1條橫紋，可能代表該手指或腳趾曾受到外傷，影響指甲基質生成。</p>
            <p style={{fontSize:'20px'}}>倘若每片指甲都出現1條以上橫紋，那便表示曾患重病、承受重大壓力、患有特定疾病，或是缺乏特定營養素，建議就醫檢查。橫紋的粗細代表生理或心理患病的程度，患病愈長則橫紋愈粗。</p>
            <p style={{fontSize:'20px'}}>當指甲橫紋的原因獲得解決，指甲通常會恢復正常。</p>

            
            資料來源:<a href="https://helloyishi.com.tw/skin-health/nail-care/the-relationship-between-nail-lines-and-diseases/">指甲有直條紋？指甲紋路與原因詳解！若有橫紋要注意，恐患這些病！</a>
            <Button onClick={backtohome}  style={{display: 'block', margin: '0 auto' }}>回到首頁</Button>
        </div>
    );
};

export function Black_line() {
    useEffect(() => {
        document.body.classList.add('custom-background');
        return () => {
            document.body.classList.remove('custom-background');
        };
    });

    const navigate = useNavigate();
    const backtohome = ()=>{
        navigate('/');
    };
    return (
        <div className='page_body' style={{color:'white'}}>
                <h1>辨識結果:黑線(Black_line)</h1>
                <img src={blackline} className='insidepic'></img>
                <p style={{fontSize:'30px', fontWeight:'bold'}}>指甲長黑線是什麼？</p>
                <p style={{fontSize:'20px'}}>指甲長出黑線其實在學理上有跡可循，被稱為「縱向黑甲症」</p>
                <p style={{fontSize:'30px', fontWeight:'bold'}}>指甲長黑線原因</p>
                <p style={{fontSize:'20px'}}>甲有黑線其實並不稀奇，不妨想像成甲床上長了痣，只是在指甲上以黑線的方式呈現。以下情況也可能會讓你的指甲長出黑線：</p>
                <ul>
                    <li style={{fontSize:'20px'}}><b>黴菌感染：</b>有些黴菌感染會產生黑色素堆積在指甲上，造成指甲出現線狀或塊狀黑色素沉積。</li>
                    <li style={{fontSize:'20px'}}><b>疾病病徵：</b>甲狀腺亢進、營養不良、愛滋病、乾癬等都會讓指甲出現黑線。</li>
                    <li style={{fontSize:'20px'}}><b>血塊淤積：</b>甲床下出血可能導致血液積聚於甲床變得暗沉，導致指甲出現黑線。</li>
                    <li style={{fontSize:'20px'}}><b>藥物影響：</b>化療藥物、治療青春痘的四環黴素。</li>
                    <li style={{fontSize:'20px'}}><b>外傷：</b>摳抓、啃咬指甲造成色素沉澱。</li>
                    <li style={{fontSize:'20px'}}><b>種族基因：</b>相較於亞洲人，黑人的指甲較容易出現黑線，據統計，約有77%的黑人到20歲前會出現縱向黑甲症。</li>
                </ul>
                <p style={{fontSize:'30px', fontWeight:'bold'}}>7大黑色素瘤潛伏危機看這些</p>
                <p style={{fontSize:'20px'}}>雖然指甲長黑線大多屬於良性變化，不過當你發現指甲的黑線符合下列情況時，則需留意是否為罹患黑色素瘤的高風險患者（Melanoma，或稱黑色素細胞癌），建議盡快就醫由醫師進行專業診斷：</p>
                <ul>
                    <li style={{fontSize:'20px'}}><b>黑線開始往旁邊擴散</b></li>
                    <li style={{fontSize:'20px'}}><b>顏色深淺不一</b></li>
                    <li style={{fontSize:'20px'}}><b>寬窄粗細不一樣</b></li>
                    <li style={{fontSize:'20px'}}><b>黑線不規則變黑</b></li>
                    <li style={{fontSize:'20px'}}><b>指甲全黑</b></li>
                    <li style={{fontSize:'20px'}}><b>指甲附近出現跳躍性斑塊</b></li>
                    <li style={{fontSize:'20px'}}><b>指甲附近皮膚變黑</b></li>
                </ul>
                <p style={{fontSize:'30px', fontWeight:'bold'}}>指甲黑線是否會自行消失？</p>
                <p style={{fontSize:'20px'}}>因多數指甲黑線屬良性，若只是單純黑色素細胞活化，或因口服藥物（四環黴素、化療藥物）、外傷等原因，只要停藥或是待外傷痊癒，過段時間就會自行消失。</p>
                <p style={{fontSize:'20px'}}>不過若是因為疾病而產生的黑線，例如甲狀腺亢進、營養不良、乾癬、粘液囊腫、全身性紅斑性狼瘡等，則需要等疾病治療痊癒，指甲的黑線才會消失。</p>
                資料來源:<a href="https://helloyishi.com.tw/skin-health/nail-care/why-do-i-have-black-lines-on-my-nails/">指甲有黑線免緊張！7大狀況發黑長斑你中了沒？</a>
                <Button onClick={backtohome}  style={{display: 'block', margin: '0 auto' }}>回到首頁</Button>
        </div>
    );
};

export function Clubbing() {
    useEffect(() => {
        document.body.classList.add('custom-background');
        return () => {
            document.body.classList.remove('custom-background');
        };
    });

    const navigate = useNavigate();
    const backtohome = ()=>{
        navigate('/');
    };
    return (
        <div className='page_body' style={{color:'white'}}>
            <h1>辨識結果:杵狀指(Clubbing)</h1>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>杵狀指是什麼？</p>
            <p style={{fontSize:'20px'}}>杵狀指會讓末端指節鬆軟腫大，甲面也明顯下彎，隨後指甲和甲床之間的正常角度消失，看起來就像是棒槌。它不只會發生於手指末端，腳趾末端也同樣可能有此症狀。</p>
            <p style={{fontSize:'20px'}}>杵狀指通常雙側發生，雙手指或腳趾都會有此症狀。不過也有單側發生的可能性。</p>
            <ul>
                <li style={{fontSize:'20px'}}><b>杵狀指的辨別</b></li>
            </ul>
            <p style={{fontSize:'20px'}}>Schamroth window test：如果兩側相對的手指背面相互抵住，通常在兩個手指的甲床和指甲之間會出現一個菱形空間。<b>在杵狀指的病人，這個空間（或窗口）是被填滿的，如下圖：</b></p>
            <img src={clubbing} className='insidepic'></img>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>杵狀指原因是什麼？</p>
            <p style={{fontSize:'20px'}}>目前醫學上還無法完全確認杵狀指的發生原因，目前主要是認為當心肺相關疾病導致身體缺氧時，會刺激患者的血液中都會有血管內皮生長因子增加。VEGF 是一種血小板衍生因子，會誘使指甲處發生血管增生、水腫、纖維母細胞或成骨細胞增生並進一步造成杵狀指。</p>
            <p style={{fontSize:'20px'}}>此外，會造成血小板慢性增加的發炎性腸道疾病，也會因為生長因子增加造成杵狀指發生。</p>
            <p style={{fontSize:'20px'}}>一般來說，如果發生杵狀指狀況，可能代表心肺功能或者腸胃道功能有問題，且已經會造成供氧問題，讓身體長期處於缺氧狀態，由於是長期漸進式的改變，身體可能耐受這樣缺氧的狀況，所以病人不一定會覺得很喘，但身體可能已經因為缺氧而造成變化。</p>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>杵狀指看哪一科？</p>
            <p style={{fontSize:'20px'}}>若懷疑發生杵狀指而不知道要掛哪一科，可以先至家醫科就醫，由家醫科先做心肺評估。</p>
            <p style={{fontSize:'20px'}}>若發現自己有杵狀指且容易喘、會聽到喘鳴聲、吸氣吸不飽等狀況，則可直接尋求胸腔科協助。</p>
            <p style={{fontSize:'20px'}}>如果肺功能評估沒問題，病人本身也沒有抽菸，就可能是心衰竭或是心臟結構異常，需至心臟科就醫。</p>
            <p style={{fontSize:'20px'}}>如果有長期腹瀉腹痛等問題，也必須尋求腸胃內科醫師協助排除發炎性腸道疾病。</p>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>杵狀指是肺癌前兆？</p>
            <p style={{fontSize:'20px'}}><b>發現自己有杵狀指，先不必驚慌</b>，病人可能本身原本就有肺部功能問題而導致杵狀指發生。有杵狀指也可能是老菸槍、嚴重慢性肺阻塞的病人或者罹患其他心臟相關疾病、腸胃道功能有狀況等。<b>並不是肺癌才會發現杵狀指。</b></p>
            <p style={{fontSize:'20px'}}>不過除了上述的原因之外，根據美國克里夫蘭醫學中心（Cleveland Clinic）所整理的資料，發生杵狀指也有可能是代表罹患下列癌症，例如肝癌、肺癌、淋巴癌、胃腸道基質瘤、食道癌，或者是心臟相關疾病等，原因很多。務必由醫師進一步確診，才能進行處置。</p>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>杵狀指如何治療？</p>
            <p style={{fontSize:'20px'}}>杵狀指多數是由於外部因素以及內部疾病所引起的，所以在進行治療的時候應對原發病進行治療。當原發病得到治療控制後，杵狀指的症狀也會得到緩解。</p>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>杵狀指會好嗎？</p>
            <p style={{fontSize:'20px'}}>當造成杵狀指的原發病得到治療，症狀也有機會逐漸緩解。</p>
            資料來源:<a href="https://cancer.commonhealth.com.tw/article/754">杵狀指原因是什麼？杵狀指是肺癌前兆？杵狀指照片、治療一次看</a>
            <Button onClick={backtohome}  style={{display: 'block', margin: '0 auto' }}>回到首頁</Button>
        </div>
    );
};

export function Healthy_nail() {
    useEffect(() => {
        document.body.classList.add('custom-background');
        return () => {
            document.body.classList.remove('custom-background');
        };
    });

    const navigate = useNavigate();
    const backtohome = ()=>{
        navigate('/');
    };
    return (
        <div className='page_body' style={{color:'white'}}>
            <h1>辨識結果:健康指甲(Healthy nail)</h1>
            <img src={healthy_nail} className='insidepic'></img>
            資料來源:<a href="https://www.kpmhealth.com/news/%E6%95%99%E4%BD%A0%E5%BE%9E%E6%8C%87%E7%94%B2%E7%9C%8B%E5%81%A5%E5%BA%B7/">教你從指甲看健康</a>
            <Button onClick={backtohome}  style={{display: 'block', margin: '0 auto' }}>回到首頁</Button>
        </div>
    );
};

export function Onycholysis() {
    useEffect(() => {
        document.body.classList.add('custom-background');
        return () => {
            document.body.classList.remove('custom-background');
        };
    });

    const navigate = useNavigate();
    const backtohome = ()=>{
        navigate('/');
    };
    return (
        <div className='page_body' style={{color:'white'}}>
            <h1>辨識結果:甲床剝離(Onycholysis)</h1>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>甚麼是甲床剝離？</p>
            <p style={{fontSize:'20px'}}>甲床剝離（空甲症）是指甲與下面的甲床分開，臨床上常用一張紙插進去探探看是否真的中空，很多人會誤以為它是灰指甲。</p>
            <img src={onycholysis} className='insidepic'></img>
            <p style={{fontSize:'20px'}}>在指甲與甲床中間隔開的空腔常常會藏污納垢，容易造成細菌黴菌等續發性感染，可以的話<b>指甲要盡量修短，並常噴次氯酸水預防感染。</b></p>
            <p style={{fontSize:'20px'}}>另外也要<b>避免使用指甲當工具去摳東西或開瓶罐，也不要常碰水和清潔劑，如會碰水需要戴手套，避免惡化甲床剝離的情況。平時應常用純的凡士林封住指甲週邊，凡士林隔絕髒污與清潔劑的能力會比是售任何一款護手霜都來的好。</b></p>
            <p style={{fontSize:'20px'}}>在選擇鞋子上需<b>避免穿著楦頭太窄的鞋子、尖頭鞋、娃娃鞋或是包鞋。</b></p>
            <img src={onycholysis2} className='insidepic'></img>
            <p style={{fontSize:'30px', fontWeight:'bold'}}>如何治療甲床剝離？</p>
            <p style={{fontSize:'20px'}}>治療部分可以使用外用或注射類固醇，如果有綠指甲（綠膿桿菌感染）或灰指甲（黴菌感染）或念珠菌感染等情形則需要治療感染。</p>
            
            資料來源:<a href="https://www.sinceredermatology.com/news/details.php?id=14375">甲床剝離懶人包—別再把空甲症當灰指甲了！</a>
            <Button onClick={backtohome}  style={{display: 'block', margin: '0 auto' }}>回到首頁</Button>
        </div>
    );
};

