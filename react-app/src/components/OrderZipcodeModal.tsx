import { useState } from "react";
// import { LfFullLayerModal } from "components/lf-modal2/LfFullLayerModal";
import styles from "../scss/OrderZipcodeModal.module.scss";

export default function OrderZipcodeModal() {
  // 우편번호찾기 모달 2
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(false);
  const [roadText, setRoadText] = useState("도로명 전체");
  const [regionText, setRegionText] = useState("지역명 전체");

  const handleSelectChange = (e: any) => {
    const type = e.target.dataset.type;
    const selectedOption = e.target.options[e.target.selectedIndex].text;

    if (type === "road") {
      setRoadText(selectedOption);
    } else if (type === "jibun") {
      setRegionText(selectedOption);
    }
  };
  // const [mode, setMode] = useState("default");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <h3> [ 우편번호 검색 컴포넌트 ] </h3>
      <div className={styles.modalZipcode}>
        <div className={styles.zipcodeArea}>
          {/* searchForm */}
          <form className={styles.formSearch} onSubmit={handleSubmit}>
            <div className={styles.formSearchInner}>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="검색어를 입력하세요"
              />
              {keyword && (
                <button
                  className={styles.btnClear}
                  type="button"
                  onClick={() => setKeyword("")}
                >
                  <span className={styles.btnClear_img}></span>
                </button>
              )}
              <button className={styles.btnSubmit} type="submit">
                {/* 이미지 */}
                <span className={styles.btnSubmit_img}></span>
              </button>
            </div>
          </form>
          {/* status === 1. default / 2. list / 3. result */}
          {/* default */}
          <div className={`${styles.formSearch_body} ${styles.search_tip}`}>
            <h2 className={styles.tip_head}>tip</h2>
            <p className={styles.desc_tip}>
              아래와 같은 조합으로 검색을 하시면 더욱 정확한 결과가
              <br />
              검색됩니다.
            </p>
            <p className={styles.desc_tip}>도로명 + 건물번호</p>
            <span className={styles.txt_example}>
              예) 판교역로 166,&nbsp;&nbsp;제주 첨단로 242
            </span>
            <p className={styles.desc_tip2}>지역명(동/리) + 번지</p>
            <span className={styles.txt_example}>
              예) 백현동 532,&nbsp;&nbsp;제주 영평동 2181
            </span>
            <p className={styles.desc_tip2}>지역명(동/리) + 건물명(아파트명)</p>
            <span className={styles.txt_example}>
              예) 분당 주공,&nbsp;&nbsp;연수동 주공3차
            </span>
            <p className={styles.desc_tip2}>사서함명 + 번호</p>
            <span className={styles.txt_example}>
              예) 분당우체국사서함 1~100
            </span>
          </div>

          {/* 2. 검색어 존재시 list 화면 */}
          {keyword && (
            <div className={`${styles.formSearch_list}`}>
              <ul className={styles.searchList}>
                <li>
                  <a onClick={() => setResult(true)}>
                    <strong className={styles.accent}>“{keyword}”</strong>
                    관련 주소 예시 1 (클릭 ! )
                  </a>
                  <button className={styles.btn_add}>
                    <span className={styles.ico_add}></span>
                  </button>
                </li>
                <li>
                  <a onClick={() => setResult(true)}>
                    <strong className={styles.accent}>“{keyword}”</strong>
                    관련 주소 예시 1
                  </a>
                  <button className={styles.btn_add}>
                    <span className={styles.ico_add}></span>
                  </button>
                </li>
                <li>
                  <a>
                    <strong className={styles.accent}>“{keyword}”</strong>
                    관련 주소 예시 1
                  </a>
                  <button className={styles.btn_add}>
                    <span className={styles.ico_add}></span>
                  </button>
                </li>
                <li>
                  <a>
                    <strong className={styles.accent}>“{keyword}”</strong>
                    관련 주소 예시 1
                  </a>
                  <button className={styles.btn_add}>
                    <span className={styles.ico_add}></span>
                  </button>
                </li>
                <li>
                  <a>
                    <strong className={styles.accent}>“{keyword}”</strong>
                    관련 주소 예시 1
                  </a>
                  <button className={styles.btn_add}>
                    <span className={styles.ico_add}></span>
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* 3. 검색 결과 */}
          {result && (
            <div className={styles.formSearch_result}>
              {/* 검색 결과 많은 경우 문구 */}
              <div className={styles.desc}>
                <div className={styles.desc_inner}>
                  <b>검색결과가 많습니다.</b> 검색어에 아래와 같은 조합을
                  이용하시면 더욱 정확한 결과가 검색됩니다.&nbsp;&nbsp;&nbsp;
                  <span>
                    <em className={styles.accent}>‘도로명+건물번호’</em>,
                    &nbsp;&nbsp;&nbsp;
                    <em className={styles.accent}>‘지역명+지번'</em>
                    ,&nbsp;&nbsp;&nbsp;
                    <em className={styles.accent}>‘지역명+건물명(아파트명)’</em>
                    ,&nbsp;&nbsp;&nbsp;
                    <em className={styles.accent}>‘사서함명+번호’</em>
                  </span>
                </div>
              </div>
              {/* result_inner */}
              <div className={styles.result_inner}>
                {/* 도로명, 지역명 */}
                <div className={styles.filter_wrap}>
                  <div className={styles.filter_road}>
                    <label htmlFor="inpRoad" className={styles.screen_out}>
                      도로명 필터링하기
                    </label>
                    <span className={styles.selected_text}>{roadText}</span>
                    <select
                      id="inpRoad"
                      className={styles.opt_select}
                      data-type="road"
                      onChange={handleSelectChange}
                    >
                      <option data-idx="0" value="|" selected>
                        도로명 전체
                      </option>
                      <option data-idx="1" value="서울 서초구 강남대로">
                        서울 서초구 강남대로
                      </option>
                      <option data-idx="2" value="서울 서초구 강남대로10길">
                        서울 서초구 강남대로10길
                      </option>
                    </select>
                    <span className={styles.img_post}></span>
                  </div>
                  <div className={styles.filter_region}>
                    <label htmlFor="inpArea" className={styles.screen_out}>
                      지역명 필터링하기
                    </label>
                    <span className={styles.selected_text}>{regionText}</span>
                    <select
                      id="inpArea"
                      className={styles.opt_select}
                      data-type="jibun"
                      onChange={handleSelectChange}
                    >
                      <option data-idx="0" value="|">
                        지역명 전체
                      </option>
                      <option data-idx="1" value="I10140000|서울 서초구 내곡동">
                        서울 서초구 내곡동
                      </option>
                      <option data-idx="2" value="I10140100|서울 서초구 반포동">
                        서울 서초구 반포동
                      </option>
                      <option data-idx="3" value="I10140200|서울 서초구 방배동">
                        서울 서초구 방배동
                      </option>
                    </select>
                    <span className={styles.img_post}></span>
                  </div>
                </div>
                {/*  // filter_wrap */}

                <h2 className={styles.screen_out}>검색 결과 보기</h2>
                <ul className={styles.list_post}>
                  <li className={styles.list_post_item}>
                    <span className={styles.txt_postcode}>06774</span>
                    <dl className={styles.list_address}>
                      <dt className={styles.tit_address}>도로명</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 강남대로 27 (AT센터)
                            </span>
                          </button>
                        </span>
                      </dd>
                      <dt className={styles.tit_address}>지 번</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 양재동 232
                            </span>
                          </button>
                        </span>
                      </dd>
                    </dl>
                  </li>
                  <li className={styles.list_post_item}>
                    <span className={styles.txt_postcode}>06774</span>
                    <dl className={styles.list_address}>
                      <dt className={styles.tit_address}>도로명</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 강남대로 27 (AT센터)
                            </span>
                          </button>
                        </span>
                      </dd>
                      <dt className={styles.tit_address}>지 번</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 양재동 232
                            </span>
                          </button>
                        </span>
                      </dd>
                    </dl>
                  </li>
                  <li className={styles.list_post_item}>
                    <span className={styles.txt_postcode}>06774</span>
                    <dl className={styles.list_address}>
                      <dt className={styles.tit_address}>도로명</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 강남대로 27 (AT센터)
                            </span>
                          </button>
                        </span>
                      </dd>
                      <dt className={styles.tit_address}>지 번</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 양재동 232
                            </span>
                          </button>
                        </span>
                      </dd>
                    </dl>
                  </li>
                  <li className={styles.list_post_item}>
                    <span className={styles.txt_postcode}>06774</span>
                    <dl className={styles.list_address}>
                      <dt className={styles.tit_address}>도로명</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 강남대로 27 (AT센터)
                            </span>
                          </button>
                        </span>
                      </dd>
                      <dt className={styles.tit_address}>지 번</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 양재동 232
                            </span>
                          </button>
                        </span>
                      </dd>
                    </dl>
                  </li>
                  <li className={styles.list_post_item}>
                    <span className={styles.txt_postcode}>06774</span>
                    <dl className={styles.list_address}>
                      <dt className={styles.tit_address}>도로명</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 강남대로 27 (AT센터)
                            </span>
                          </button>
                        </span>
                      </dd>
                      <dt className={styles.tit_address}>지 번</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 양재동 232
                            </span>
                          </button>
                        </span>
                      </dd>
                    </dl>
                  </li>
                  <li className={styles.list_post_item}>
                    <span className={styles.txt_postcode}>06774</span>
                    <dl className={styles.list_address}>
                      <dt className={styles.tit_address}>도로명</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 강남대로 27 (AT센터)
                            </span>
                          </button>
                        </span>
                      </dd>
                      <dt className={styles.tit_address}>지 번</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 양재동 232
                            </span>
                          </button>
                        </span>
                      </dd>
                    </dl>
                  </li>
                  <li className={styles.list_post_item}>
                    <span className={styles.txt_postcode}>06774</span>
                    <dl className={styles.list_address}>
                      <dt className={styles.tit_address}>도로명</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 강남대로 27 (AT센터)
                            </span>
                          </button>
                        </span>
                      </dd>
                      <dt className={styles.tit_address}>지 번</dt>
                      <dd className={styles.info_address}>
                        <span className={styles.txt_address}>
                          <button className={styles.link_post}>
                            <span className={styles.txt_addr}>
                              서울 서초구 양재동 232
                            </span>
                          </button>
                        </span>
                      </dd>
                    </dl>
                  </li>
                </ul>
                {/* pagination */}
                {/* 이전 버튼 활성화 -- .on 추가 */}
                {/* 다음 버튼 비활성화 -- .off 추가 */}
                <div
                  className={styles.paging_post}
                  role="navigation"
                  aria-label="페이지네이션"
                >
                  <div
                    className={styles.inner_paging}
                    data-page="1"
                    data-total="20"
                    aria-live="polite"
                  >
                    {/* 이전 */}
                    {/* 이전 페이지 활성화되는 경우 .on 추가 --- ${styles.on} */}
                    <button
                      type="button"
                      className={`${styles.link_page} ${styles.link_prev} `}
                      aria-label="이전 페이지"
                      disabled
                      data-action="prev"
                    >
                      <span className={styles.screen_out}>
                        이전 페이지 없음
                      </span>
                      <span className={styles.img_post}></span>
                    </button>

                    <span className={styles.screen_out}>현재페이지</span>
                    <span className={styles.num_page}>
                      <strong data-current>1</strong> /
                      <span data-total>20</span>
                    </span>

                    {/* 다음 */}
                    {/* 다음 페이지 비활성화되는 경우 .off 추가 --- ${styles.off} */}
                    <button
                      type="button"
                      className={`${styles.link_page} ${styles.link_next}`}
                      aria-label="다음 페이지"
                      data-action="next"
                    >
                      <span className={styles.img_post}></span>
                    </button>
                  </div>
                </div>
                {/* //pagination */}
              </div>
              {/*  //result_inner */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
