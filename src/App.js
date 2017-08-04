import React, { Component } from 'react'
// import Choices from 'choices.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'choices.js/assets/styles/css/choices.min.css'
import './vendor/admin.css'
import './App.css'

// import { dateFormat,numberWithCommas} from './helper'

// import { publish,columnist,status,order} from './config'
// url : https://wwwback.dek-d.com/article/admin/?json=1

class App extends Component {
    componentDidMount () {
        // const elements = document.querySelectorAll('.select')
        // const selectConfig = {
        //     position: 'buttom',
        //     renderSelectedChoices: 'auto',
        //     itemSelectText: ''
        // }
        // for (let i = 0; i < elements.length; i++) {
        //     const el = elements[i]
        //     new Choices(el, selectConfig)
        // }

        // fetch('https://wwwback.dek-d.com/article/admin/?json=1')
        //   .then((res)=>{
        //     return res.json()
        //   }).then((res)=>{
        //     console.log('approve_datetime',dateFormat(res.data.article[0].approve_datetime))
        //     console.log('shared',numberWithCommas(res.data.article[0].shared))
        //   })
    }
    render () {
        return (
          <div className='container-fluid'>
            <div id='wrapper'>
              <div id='list'>
                <div className='clearfix'>
                  <div className='filter pull-left'>
                    <select className='select' style={{ width: 200 }}>
                      <option value='all'>บทความทุกประเภท</option>
                      <option value='wait'>บทความรอตรวจ</option>
                      <option value='1'>บทความตีพิมพ์แล้ว</option>
                      <option value='2'>บทความตั้งเวลา</option>
                      <option value='3'>บทความตั้งเวลาและเปิดให้ Subscribe</option>
                    </select>
                    <select className='select' style={{ width: 120 }}>
                      <option value='0' >คอลัมนิสต์ทุกคน</option>
                      <option value='603867' >พี่ปอน</option>
                      <option value='601596' >พี่โน้ต</option>
                      <option value='617341' >พี่เต้ </option>
                      <option value='705674' >พี่อติน</option>
                      <option value='984655' >พี่ลาเต้</option>
                      <option value='1032714' >พี่เหมี่ยว</option>
                      <option value='1185124' >พี่จูน</option>
                      <option value='2076199' >พี่เป้</option>
                      <option value='2116943' >พี่แนน</option>
                      <option value='2660941' >พี่อิง</option>
                      <option value='1158912' >พี่บอย</option>
                      <option value='2718232' >พี่มิ้นท์</option>
                      <option value='3028613' >พี่ผึ้ง</option>
                      <option value='2987351' >ข่าวประชาสัมพันธ์</option>
                      <option value='5290667' >ทีมงาน writer</option>
                      <option value='5412576' >ทีมงาน writer</option>
                      <option value='5414066' >ทีมงานแบนนิยาย</option>
                      <option value='3083442' >สาวนูเกิร์ล</option>
                      <option value='3088953' >พี่ซาร่า</option>
                      <option value='6239138' >ทีมงานควิซ</option>
                      <option value='3072214' >พี่แป้ง</option>
                      <option value='2495229' >พี่พิซซ่า</option>
                      <option value='3163511' >พี่แก้ว</option>
                      <option value='3280719' >Dek-D Tutor</option>
                      <option value='3367944' >พี่น้อง</option>
                      <option value='3483486' >พี่อ้อม</option>
                      <option value='3486149' >พี่โอ๊ต</option>
                      <option value='3425966' >7 Stars</option>
                      <option value='3425973' >นักเขียนหน้าใส</option>
                      <option value='3630721' >M.House</option>
                      <option value='3935382' >พี่โช</option>
                      <option value='4021589' >พี่กวาง</option>
                      <option value='4320864' >พี่ทิพย์</option>
                      <option value='646390' >พี่อาตู</option>
                      <option value='4509006' >พี่อร</option>
                      <option value='4892669' >พี่อีฟ</option>
                      <option value='4892940' >พี่แพม</option>
                      <option value='4988018' >พี่เมก้า</option>
                      <option value='3735465' >พี่ไจโกะ</option>
                      <option value='3549893' >พี่นิทาน</option>
                      <option value='5461522' >พี่โด่ง</option>
                      <option value='5674806' >พี่นิด</option>
                      <option value='1067529' >พี่น้ำฝน</option>
                      <option value='5485247' >พี่เมย์บี</option>
                      <option value='5740069' >ทีมเรียนต่อนอก</option>
                      <option value='5766733' >พี่ส้ม</option>
                      <option value='1282276' >พี่หญิง</option>
                      <option value='2168781' >พี่กุ๊กกิ๊ก</option>
                      <option value='6172804' >พี่วุฒิ</option>
                      <option value='5972667' >พี่นก</option>
                      <option value='6223779' >พี่มิ้ม</option>
                      <option value='4054873' >พี่อุ๋ย</option>
                      <option value='6181716' >พี่แก้ม</option>
                      <option value='5185662' >พี่จ๋า</option>
                      <option value='863882' >พี่เต้จัง</option>
                      <option value='1050121' >พี่ต้น-D</option>
                      <option value='1107395' >พี่นา</option>
                      <option value='2603490' >พี่เก๋</option>
                      <option value='2700690' >พี่หน่อไม้</option>
                      <option value='3081155' >พี่ตาล</option>
                      <option value='3953625' >พี่อ๊อฟ</option>
                      <option value='3924727' >พี่เมฆ</option>
                      <option value='1156415' >พี่แพรว</option>
                      <option value='5647456' >พี่จูเนียร์</option>
                      <option value='4932780' >พี่รัตน์</option>
                      <option value='5165534' >พี่ติส</option>
                      <option value='5169034' >พี่เมิส</option>
                      <option value='6409289' >พี่กิ๊ฟ</option>
                      <option value='1171764' >พี่โอม</option>
                      <option value='2346529' >พี่น็อต</option>
                      <option value='610279' >พี่แบงค์ ญ</option>
                      <option value='2962972' >พี่เม</option>
                      <option value='3004499' >พี่มุ</option>
                      <option value='3008871' >พี่อาร์ม</option>
                      <option value='2576613' >พี่โบว์</option>
                      <option value='3033785' >พี่คิม</option>
                      <option value='2965955' >พี่ต้า</option>
                      <option value='2939672' >พี่ฟุ้ง</option>
                      <option value='4350648' >พี่บิ๊ก</option>
                      <option value='5112244' >พี่พัดพัด</option>
                      <option value='2594934' >พี่ออมสิน</option>
                      <option value='2179950' >พี่แชมป์</option>
                      <option value='5337996' >พี่ปาล์ม</option>
                      <option value='5612054' >พี่เบลล์</option>
                      <option value='5893734' >พี่ทิม</option>
                      <option value='5641654' >พี่แอนฉวี</option>
                      <option value='5008631' >พี่ทอป</option>
                      <option value='1294190' >พี่ฟอยล์</option>
                      <option value='5584203' >พี่นนท์</option>
                      <option value='934290' >พี่ปอย</option>
                      <option value='2372339' >พี่ตุ้น</option>
                      <option value='2678690' >พี่เบิร์ด</option>
                      <option value='2915075' >พี่เต็นท์</option>
                      <option value='602278' >พี่แนนนี่</option>
                      <option value='3184081' >พี่ป้อ</option>
                      <option value='3958017' >พี่เม</option>
                      <option value='4945415' >พี่แอนเจ</option>
                      <option value='5477643' >พี่ฝน</option>
                      <option value='4901411' >พี่โบ-p</option>
                      <option value='4992382' >พี่ฝน</option>
                      <option value='5675126' >พี่ที</option>
                      <option value='6072817' >พี่อ้อม</option>
                      <option value='3250393' >พี่หญิง</option>
                      <option value='1086785' >พี่หนูนา</option>
                      <option value='2690960' >พี่หนูนา</option>
                      <option value='2702398' >พี่แบงค์</option>
                      <option value='610135' >พี่เกียรติ</option>
                      <option value='2719037' >พี่ปุ๋ย</option>
                      <option value='3166354' >พี่โดนัท</option>
                      <option value='669151' >พี่ปาล์ม</option>
                      <option value='794442' >พี่เอม</option>
                      <option value='1040338' >พี่นัท</option>
                      <option value='1017011' >พี่ปอ</option>
                      <option value='1159705' >พี่มิ้งค์</option>
                      <option value='1113555' >พี่ต้อง</option>
                      <option value='3026927' >พี่เบียร์</option>
                      <option value='2989764' >พี่สตางค์</option>
                      <option value='2219372' >พี่มายด์</option>
                      <option value='2134470' >พี่หนิง</option>
                      <option value='2008482' >พี่แคร์</option>
                      <option value='2317918' >พี่คุณ</option>
                      <option value='2351284' >พี่บูม</option>
                      <option value='2371513' >พี่กิฟท์</option>
                      <option value='2385293' >พี่ปอน</option>
                      <option value='2454722' >พี่อาฟ</option>
                      <option value='905677' >พี่โจ</option>
                      <option value='2233621' >พี่ป๊อก</option>
                      <option value='2700356' >พี่ทอย</option>
                      <option value='2651765' >พี่อ๊อฟ</option>
                      <option value='2778424' >พี่ชาญ</option>
                      <option value='1272089' >พี่บ๋อม</option>
                      <option value='2928421' >พี่เอ็ม</option>
                      <option value='3008102' >พี่พีพี</option>
                      <option value='1232561' >พี่เลิฟ</option>
                      <option value='3007842' >พี่อาย</option>
                      <option value='727867' >พี่ป๊อย</option>
                      <option value='3161634' >พี่มะพร้าว</option>
                      <option value='3163500' >พี่อีฟ</option>
                      <option value='3262136' >พี่ไนท์</option>
                      <option value='600175' >พี่หวาย</option>
                      <option value='3284878' >พี่มด</option>
                      <option value='3284879' >พี่จิน</option>
                      <option value='3266012' >พี่เนส</option>
                      <option value='3349041' >พี่ส่วง</option>
                      <option value='1293703' >พี่ฝน</option>
                      <option value='1041329' >พี่เบญ</option>
                      <option value='3369510' >พี่กะลิค</option>
                      <option value='2981936' >พี่แบงค์</option>
                      <option value='3406142' >พี่วุด</option>
                      <option value='3395328' >พี่เก่ง</option>
                      <option value='857455' >พี่มุก</option>
                      <option value='3735467' >พี่เตย</option>
                      <option value='2586351' >พี่แคทตี้</option>
                      <option value='655345' >พี่ฝ้าย</option>
                      <option value='3151164' >พี่กัญ</option>
                      <option value='4425224' >พี่บูม</option>
                      <option value='689016' >พี่บอส</option>
                      <option value='1141100' >พี่ปัด</option>
                      <option value='2983712' >พี่กิต</option>
                      <option value='3007688' >พี่เตย</option>
                      <option value='3028607' >พี่อ้อม</option>
                      <option value='3357490' >พี่พริก</option>
                      <option value='2418923' >พี่เมษ์</option>
                      <option value='4002913' >พี่เปรม</option>
                      <option value='4881624' >พี่ก๊อปแก๊ป</option>
                      <option value='5456328' >พี่เนย</option>
                      <option value='5511011' >พี่วิว</option>
                      <option value='5517682' >พี่ท็อปเอสเอฟ</option>
                      <option value='3189043' >พี่บุ๋ม</option>
                      <option value='3681046' >พี่โมจิ</option>
                      <option value='3810090' >พี่โจ้</option>
                      <option value='3890733' >พี่แทค</option>
                      <option value='4862234' >พี่เดียว</option>
                      <option value='675091' >พี่แก๊ป</option>
                      <option value='967370' >พี่ต้น</option>
                      <option value='2185665' >พี่โมชิ</option>
                      <option value='4636208' >พี่ใหม่</option>
                      <option value='3747858' >พี่ดาว</option>
                      <option value='1256226' >พี่ไม้ไผ่</option>
                      <option value='5610598' >พี่ปริญ</option>
                      <option value='3154640' >พี่กุ๊ก</option>
                      <option value='2934057' >พี่อ้อน</option>
                      <option value='3418460' >พี่นุช</option>
                      <option value='4892946' >พี่แอนนี่</option>
                      <option value='5353063' >พี่เต็ม</option>
                      <option value='4007291' >พี่พิมพ์</option>
                      <option value='5710028' >พี่เต๋า</option>
                      <option value='676256' >พี่ป้อง</option>
                      <option value='830742' >พี่ปอง</option>
                      <option value='5318780' >พี่เล็ก</option>
                      <option value='5320107' >พี่น้ำผึ้ง</option>
                      <option value='1137139' >พี่เฟิร์น</option>
                      <option value='3083812' >พี่ก้าง</option>
                      <option value='2564371' >พี่จ๋า</option>
                      <option value='4164395' >พี่วิว</option>
                      <option value='4164393' >พี่นีโอ</option>
                      <option value='4857157' >พี่ลูกตาล</option>
                      <option value='2573954' >พี่พลอย</option>
                      <option value='5349208' >พี่ฝน</option>
                      <option value='5430510' >พี่ออน</option>
                      <option value='5607084' >พี่หนูเล็ก</option>
                      <option value='5466404' >พี่มายด์</option>
                      <option value='5607035' >พี่พาขวัญ</option>
                      <option value='5610427' >พี่หวาน</option>
                      <option value='5610906' >พี่แป๋ม</option>
                      <option value='2125226' >พี่แทรกเตอร์</option>
                      <option value='5650891' >พี่โปร</option>
                      <option value='2218650' >พี่ดังกิ้น</option>
                      <option value='1260691' >พี่ซูม</option>
                      <option value='6593089' >พี่กี้</option>
                      <option value='6593101' >พี่เฟิสท์</option>
                      <option value='3433701' >พี่เจม</option>
                      <option value='6625476' >พี่ซุป</option>
                      <option value='6670660' >สายสืบเด็กดี</option>
                      <option value='6671060' >พี่เนย_</option>
                      <option value='6670798' >พี่กุ๊กไก่</option>
                    </select>
                    <select className='select' style={{ width: 120 }}>
                      <option value='0' >ทุกสถานะ</option>
                      <option value='1' >สถานะ Public</option>
                      <option value='2' >สถานะ Private</option>
                    </select>
                    <select className='select' style={{ width: 120 }}>
                      <option value='id' >เรียงตาม ID</option>
                      <option value='datetime' >เรียนตามวันเวลา</option>
                    </select>
                  </div>
                  <div className='pagination pull-right'>
                    <ul>
                      <li className='disabled'><a href='?page=0'>Prev</a></li>
                      <li className='active'><a href='?page=1'>1</a></li>
                      <li><a href='?page=2'>2</a></li>
                      <li><a href='?page=2'>Next</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='narrow'>
                <table id='article-list' className='table table-bordered table-hover'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>ชื่อบทความ</th>
                      <th>ดู</th>
                      <th>ตอบ</th>
                      <th>แชร์</th>
                      <th>ตีพิมพ์</th>
                      <th>คอลัมนิสต์</th>
                      <th>ตรวจโดย</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id='article-45447'>
                      <td className='center'>45447</td>
                      <td>
                        <a className='name' href='//wwwback.dek-d.com/teentrends/45447/' rel='noopener noreferrer' target='_blank' title='ดูบทความ: มาเปลี่ยนกัน! ฉลองสภากาชาดครบ 124 ปี ด้วยรูปโปรไฟล์ #บริจาคโลหิตต้องบอกต่อ'>มาเปลี่ยนกัน! ฉลองสภากาชาดครบ 124 ปี ด้วยรูปโปรไฟล์ #บริจาคโลหิตต้องบอกต่อ</a>
                        <div className='tools'>
                          <ul className='breadcrumb pull-left'>
                            <li className='active'>Teen Trends</li>
                            <li className='active'>ข่าวทันกระแส</li>
                          </ul>
                          <div className='pull-right update-action'>
                            <a className='notice'>แจ้งอัพเดท</a><span> | </span>
                            <a >แก้ไข</a><span> | </span>
                            <a className='delete-trigger'>ลบ</a>
                          </div>
                        </div>
                      </td>
                      <td className='center'>4,756</td>
                      <td className='center'>26</td>
                      <td className='center'>265</td>
                      <td className='center publish-state'>
                        <div className='published'>
                          <i className='fa fa-circle' aria-hidden='true' title='ตีพิมพ์แล้ว' /><span>ขึ้นเว็บแล้ว</span>
                        </div>
                        <span>24 เมษายน 2560 - 12:05 น.</span>
                      </td>
                      <td className='center'>
                        <img alt='พี่กวาง' src='https://img.dek-d.com/1/newtoon/402/4021589' className='avatar' />
                        <p className='article-name'>พี่กวาง</p>
                      </td>
                      <td className='center'>
                        <img alt='พี่จูน' src='https://img.dek-d.com/1/newtoon/118/1185124' className='avatar' />
                        <p className='article-name'>พี่จูน</p>
                      </td>
                    </tr>
                    <tr id='article-45237'>
                      <td className='center'>45237</td>
                      <td>
                        <a className='name' href='//wwwback.dek-d.com/teentrends/45237/' rel='noopener noreferrer' target='_blank' title='ดูบทความ: มาจนได้! &quot;Facebook Story&quot; โพสต์อะไรก็ได้ เดี๋ยวเฟซบุ๊กลบให้ใน 24 ชม.'>มาจนได้! &quot;Facebook Story&quot; โพสต์อะไรก็ได้ เดี๋ยวเฟซบุ๊กลบให้ใน 24 ชม.</a>
                        <div className='tools'>
                          <ul className='breadcrumb pull-left'>
                            <li className='active'>Teen Trends</li>
                            <li className='active'>ข่าวทันกระแส</li>
                          </ul>
                          <div className='pull-right update-action'>
                            <a >แก้ไข</a><span> | </span>
                            <a className='delete-trigger'>ลบ</a>
                          </div>
                        </div>
                      </td>
                      <td className='center'>26,522</td>
                      <td className='center'>4</td>
                      <td className='center'>1,355</td>
                      <td className='center publish-state'>
                        <div className='created'>
                          <i className='fa fa-circle' aria-hidden='true' title='ตีพิมพ์แล้ว' /><span>เริ่มเขียนเมื่อ</span>
                        </div>
                        <span>30 มีนาคม 2560 - 17:55 น.</span>
                      </td>
                      <td className='center'>
                        <img alt='พี่กวาง' src='https://img.dek-d.com/1/newtoon/402/4021589' className='avatar' />
                        <p className='article-name'>พี่กวาง</p>
                      </td>
                      <td className='center'>
                        <button className="btn btn-success approve-trigger">ตรวจผ่าน</button>
                      </td>
                    </tr>
                    <tr id='article-45238'>
                      <td className='center'>45238</td>
                      <td>
                        <a className='name' href='//wwwback.dek-d.com/teentrends/45237/' rel='noopener noreferrer' target='_blank' title='ดูบทความ: มาจนได้! &quot;Facebook Story&quot; โพสต์อะไรก็ได้ เดี๋ยวเฟซบุ๊กลบให้ใน 24 ชม.'>มาจนได้! &quot;Facebook Story&quot; โพสต์อะไรก็ได้ เดี๋ยวเฟซบุ๊กลบให้ใน 24 ชม.</a>
                        <div className='tools'>
                          <ul className='breadcrumb pull-left'>
                            <li className='active'>Teen Trends</li>
                            <li className='active'>ข่าวทันกระแส</li>
                          </ul>
                          <div className='pull-right update-action'>
                            <a >แก้ไข</a><span> | </span>
                            <a className='delete-trigger'>ลบ</a>
                          </div>
                        </div>
                      </td>
                      <td className='center'>26,522</td>
                      <td className='center'>4</td>
                      <td className='center'>1,355</td>
                      <td className='center publish-state'>
                        <div className="scheduled">
                          <i className="fa fa-clock-o" title="ตั้งเวลา"></i><span>ตั้งเวลา</span>
                        </div>
                        <span>30 มีนาคม 2560 - 17:55 น.</span>
                      </td>
                      <td className='center'>
                        <img alt='พี่กวาง' src='https://img.dek-d.com/1/newtoon/402/4021589' className='avatar' />
                        <p className='article-name'>พี่กวาง</p>
                      </td>
                      <td className='center'>
                        <button className="btn btn-success approve-trigger">ตรวจผ่าน</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="empty" colSpan={8}>
                        ไม่พบบทความ
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='clearfix'>
                <div className='pull-left'>502 บทความ</div>
                <div className='pagination pull-right'>
                  <ul>
                    <li className='disabled'><a>Prev</a></li>
                    <li className='active'><a>1</a></li>
                    <li><a>2</a></li>
                    <li><a>Next</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default App
