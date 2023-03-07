import { Link } from "react-router-dom";

function BrandSection() {
  return ( 
    <section id="brand_section">
  <div className="container">
    <div className="row justify-content-center align-items-center d-flex">
      <div className="col-12 col-lg-3">
        <Link>
          <svg width="240" height="60" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
            <path d="M76.6133 30C76.6133 41.0451 68.4165 50 58.3066 50C48.1967 50 40 41.0451 40 30C40 18.9549 48.1967 10 58.3066 10C68.4187 10 76.6133 18.9549 76.6133 30Z" fill="white"/>
            <path d="M49.032 30.6723L49.111 30.5367L53.8733 22.3976C53.9429 22.2784 54.1065 22.2907 54.1592 22.4202C54.9548 24.3681 55.6413 26.7908 55.3196 28.299C55.1823 28.9196 54.8062 29.76 54.383 30.5367C54.3285 30.6497 54.2683 30.7607 54.2043 30.8675C54.1742 30.9168 54.1234 30.9456 54.0689 30.9456H49.1712C49.0395 30.9456 48.9624 30.7894 49.032 30.6723Z" fill="#141E36"/>
            <path d="M70.2585 32.1844V33.4728C70.2585 33.5467 70.2171 33.6125 70.1569 33.6412C69.7883 33.8138 68.5263 34.4467 68.0015 35.244C66.6623 37.2803 65.6392 40.192 63.3521 40.192H53.8106C50.4289 40.192 47.6885 37.1879 47.6885 33.481V33.3618C47.6885 33.2632 47.7618 33.183 47.8521 33.183H53.1711C53.2764 33.183 53.3535 33.2899 53.3442 33.4029C53.3065 33.781 53.3705 34.1673 53.5341 34.5186C53.8501 35.2194 54.5046 35.657 55.2118 35.657H57.845V33.4111H55.2419C55.1084 33.4111 55.0294 33.2426 55.1065 33.1234C55.1347 33.0762 55.1667 33.0269 55.2005 32.9714C55.4469 32.5892 55.7986 31.9954 56.1485 31.3193C56.3873 30.8632 56.6187 30.3762 56.8049 29.8871C56.8425 29.7988 56.8726 29.7083 56.9027 29.62C56.9535 29.4638 57.0061 29.3179 57.0437 29.172C57.0814 29.0487 57.1114 28.9193 57.1415 28.798C57.23 28.383 57.2676 27.9432 57.2676 27.4871C57.2676 27.3083 57.2601 27.1213 57.245 26.9426C57.2375 26.7474 57.2149 26.5521 57.1923 26.3569C57.1773 26.1843 57.1491 26.0138 57.119 25.835C57.0814 25.574 57.0287 25.3152 56.9685 25.0542L56.9478 24.9556C56.9027 24.7768 56.8651 24.6062 56.8124 24.4275C56.6638 23.8665 56.4927 23.3199 56.3121 22.8083C56.2463 22.6048 56.171 22.4096 56.0958 22.2144C55.9849 21.9206 55.872 21.6535 55.7685 21.4007C55.7159 21.2856 55.6708 21.1808 55.6256 21.074C55.5748 20.9528 55.5222 20.8315 55.4695 20.7165C55.4319 20.6281 55.3886 20.5459 55.3585 20.4637L55.0369 19.8144C54.9918 19.726 55.067 19.6212 55.1554 19.648L57.1679 20.2438H57.1735C57.1773 20.2438 57.1792 20.2459 57.181 20.2459L57.4462 20.326L57.7378 20.4165L57.845 20.4493V19.1425C57.845 18.5116 58.3077 18 58.8795 18C59.1653 18 59.4249 18.1274 59.6111 18.3349C59.7973 18.5425 59.9139 18.826 59.9139 19.1425V21.0822L60.1283 21.148C60.1453 21.1542 60.1622 21.1624 60.1772 21.1747C60.2299 21.2178 60.3051 21.2815 60.401 21.3596C60.4763 21.4254 60.5572 21.5055 60.655 21.5877C60.8487 21.7582 61.08 21.9781 61.3339 22.2309C61.4016 22.2946 61.4675 22.3603 61.5277 22.4261C61.855 22.759 62.2217 23.1494 62.5715 23.5809C62.6693 23.7021 62.7653 23.8254 62.8631 23.9548C62.9609 24.0864 63.0643 24.2158 63.1546 24.3453C63.2731 24.5179 63.401 24.6966 63.512 24.8836C63.5646 24.972 63.6248 25.0624 63.6756 25.1508C63.8185 25.387 63.9445 25.6316 64.0649 25.8761C64.1157 25.9891 64.1684 26.1124 64.2135 26.2336C64.347 26.5604 64.4524 26.8932 64.5201 27.2261C64.5408 27.298 64.5558 27.3761 64.5633 27.446V27.4624C64.5859 27.561 64.5934 27.6658 64.6009 27.7727C64.631 28.1138 64.616 28.4549 64.5483 28.798C64.5201 28.944 64.4825 29.0816 64.4373 29.2275C64.3922 29.3672 64.347 29.5131 64.2887 29.6508C64.1759 29.9364 64.0423 30.222 63.8843 30.4892C63.8336 30.5878 63.7734 30.6926 63.7132 30.7912C63.6474 30.896 63.5797 30.9946 63.5195 31.0912C63.4367 31.2145 63.3483 31.344 63.258 31.459C63.1772 31.5803 63.0944 31.7015 63.0041 31.8084C62.8781 31.9707 62.7577 32.1248 62.6317 32.2728C62.5565 32.3693 62.4756 32.468 62.3928 32.5563C62.312 32.6549 62.2292 32.7433 62.154 32.8255C62.028 32.9632 61.9226 33.07 61.8342 33.1584L61.6274 33.3659C61.5973 33.3947 61.5578 33.4111 61.5164 33.4111H59.9139V35.657H61.9302C62.3816 35.657 62.8104 35.4824 63.1565 35.1618C63.275 35.0488 63.7922 34.5598 64.4035 33.8221C64.4241 33.7974 64.4505 33.7789 64.4806 33.7707L70.0497 32.0118C70.1532 31.9789 70.2585 32.0652 70.2585 32.1844Z" fill="#141E36"/>
            <path d="M94.4523 39.599C92.7974 39.599 91.2761 39.1938 89.8888 38.3835C88.518 37.5731 87.4229 36.4457 86.6039 35.0013C85.8017 33.5391 85.4004 31.9009 85.4004 30.0865C85.4004 28.272 85.8017 26.6425 86.6039 25.1981C87.4229 23.7536 88.518 22.6261 89.8888 21.8158C91.2761 21.0055 92.7974 20.6003 94.4523 20.6003C96.1072 20.6003 97.6201 21.0055 98.9909 21.8158C100.379 22.6261 101.465 23.7536 102.251 25.1981C103.053 26.6425 103.454 28.272 103.454 30.0865C103.454 31.9009 103.053 33.5391 102.251 35.0013C101.448 36.4457 100.362 37.5731 98.9909 38.3835C97.6201 39.1938 96.1072 39.599 94.4523 39.599ZM94.4523 35.4769C95.8564 35.4769 96.9764 34.9836 97.8123 33.9971C98.665 33.0107 99.0912 31.7071 99.0912 30.0865C99.0912 28.4482 98.665 27.1446 97.8123 26.1757C96.9764 25.1893 95.8564 24.696 94.4523 24.696C93.0313 24.696 91.8948 25.1805 91.0421 26.1493C90.2062 27.1182 89.7885 28.4305 89.7885 30.0865C89.7885 31.7247 90.2062 33.0371 91.0421 34.0236C91.8948 34.9925 93.0313 35.4769 94.4523 35.4769Z" fill="white"/>
            <path d="M110.128 26.7571C110.545 26.0701 111.122 25.5152 111.858 25.0925C112.593 24.6697 113.454 24.4583 114.44 24.4583C115.594 24.4583 116.639 24.7665 117.575 25.3831C118.511 25.9997 119.246 26.8805 119.781 28.0255C120.333 29.1705 120.609 30.5005 120.609 32.0155C120.609 33.5304 120.333 34.8692 119.781 36.0318C119.246 37.1769 118.511 38.0665 117.575 38.7007C116.639 39.3172 115.594 39.6254 114.44 39.6254C113.471 39.6254 112.61 39.4141 111.858 38.9913C111.122 38.5685 110.545 38.0225 110.128 37.353V43.8004H105.84V24.6697H110.128V26.7571ZM116.246 32.0155C116.246 30.8881 115.945 30.0073 115.343 29.3731C114.758 28.7213 114.031 28.3954 113.161 28.3954C112.309 28.3954 111.582 28.7213 110.98 29.3731C110.395 30.0249 110.102 30.9145 110.102 32.0419C110.102 33.1693 110.395 34.0589 110.98 34.7107C111.582 35.3625 112.309 35.6883 113.161 35.6883C114.014 35.6883 114.741 35.3625 115.343 34.7107C115.945 34.0413 116.246 33.1429 116.246 32.0155Z" fill="white"/>
            <path d="M136.047 31.8041C136.047 32.2269 136.023 32.6672 135.972 33.1253H126.268C126.335 34.0413 126.611 34.7459 127.096 35.2391C127.597 35.7148 128.207 35.9526 128.926 35.9526C129.996 35.9526 130.74 35.4769 131.158 34.5257H135.722C135.488 35.4946 135.061 36.3665 134.443 37.1417C133.841 37.9167 133.08 38.5245 132.161 38.9649C131.242 39.4053 130.213 39.6255 129.077 39.6255C127.706 39.6255 126.486 39.3172 125.416 38.7007C124.346 38.0841 123.51 37.2033 122.908 36.0583C122.307 34.9133 122.006 33.5745 122.006 32.0419C122.006 30.5093 122.298 29.1705 122.883 28.0255C123.485 26.8805 124.321 25.9997 125.391 25.3831C126.461 24.7665 127.689 24.4583 129.077 24.4583C130.431 24.4583 131.634 24.7577 132.687 25.3567C133.741 25.9556 134.56 26.81 135.145 27.9198C135.747 29.0296 136.047 30.3243 136.047 31.8041ZM131.66 30.615C131.66 29.8399 131.409 29.2233 130.907 28.7653C130.406 28.3073 129.779 28.0783 129.027 28.0783C128.308 28.0783 127.698 28.2985 127.196 28.7389C126.711 29.1793 126.41 29.8047 126.294 30.615H131.66Z" fill="white"/>
            <path d="M146.835 24.5105C148.473 24.5105 149.777 25.0742 150.746 26.2016C151.733 27.3114 152.226 28.844 152.226 30.7993V39.4135H147.963V31.4071C147.963 30.4206 147.721 29.6543 147.236 29.1082C146.751 28.5621 146.099 28.2891 145.28 28.2891C144.461 28.2891 143.809 28.5621 143.324 29.1082C142.84 29.6543 142.597 30.4206 142.597 31.4071V39.4135H138.31V24.669H142.597V26.6244C143.032 25.9726 143.617 25.4617 144.353 25.0918C145.088 24.7043 145.915 24.5105 146.835 24.5105Z" fill="white"/>
            <path d="M161.575 39.599C160.288 39.599 159.134 39.3788 158.114 38.9384C157.095 38.498 156.276 37.8462 155.657 36.983C155.055 36.1199 154.737 35.0805 154.704 33.865H159.268C159.335 34.5521 159.56 35.0805 159.945 35.4505C160.329 35.8028 160.831 35.9789 161.449 35.9789C162.085 35.9789 162.586 35.8292 162.954 35.5297C163.321 35.2127 163.506 34.7811 163.506 34.235C163.506 33.7769 163.355 33.3982 163.054 33.0987C162.77 32.7993 162.41 32.5527 161.976 32.3589C161.558 32.1651 160.956 31.9449 160.17 31.6983C159.034 31.3283 158.106 30.9584 157.387 30.5885C156.668 30.2186 156.05 29.6725 155.532 28.9502C155.013 28.228 154.754 27.2855 154.754 26.1229C154.754 24.3965 155.348 23.0489 156.535 22.0801C157.721 21.0936 159.268 20.6003 161.173 20.6003C163.113 20.6003 164.675 21.0936 165.862 22.0801C167.049 23.0489 167.685 24.4053 167.768 26.1493H163.129C163.096 25.5504 162.887 25.0835 162.502 24.7489C162.118 24.3965 161.625 24.2204 161.023 24.2204C160.505 24.2204 160.087 24.3701 159.769 24.6696C159.452 24.9514 159.293 25.3654 159.293 25.9115C159.293 26.5104 159.56 26.9773 160.095 27.3119C160.63 27.6467 161.466 28.0078 162.603 28.3953C163.74 28.8005 164.659 29.188 165.361 29.558C166.08 29.9279 166.698 30.4652 167.216 31.1698C167.735 31.8745 167.994 32.7817 167.994 33.8915C167.994 34.9484 167.735 35.9085 167.216 36.7716C166.715 37.6348 165.98 38.3218 165.01 38.8327C164.04 39.3435 162.895 39.599 161.575 39.599Z" fill="white"/>
            <path d="M183.821 31.8041C183.821 32.2269 183.796 32.6672 183.746 33.1253H174.042C174.109 34.0413 174.385 34.7459 174.869 35.2391C175.371 35.7148 175.981 35.9526 176.7 35.9526C177.77 35.9526 178.514 35.4769 178.932 34.5257H183.495C183.261 35.4946 182.835 36.3665 182.216 37.1417C181.615 37.9167 180.854 38.5245 179.934 38.9649C179.015 39.4053 177.987 39.6255 176.85 39.6255C175.48 39.6255 174.259 39.3172 173.189 38.7007C172.12 38.0841 171.284 37.2033 170.682 36.0583C170.08 34.9133 169.779 33.5745 169.779 32.0419C169.779 30.5093 170.072 29.1705 170.657 28.0255C171.258 26.8805 172.094 25.9997 173.164 25.3831C174.234 24.7665 175.463 24.4583 176.85 24.4583C178.204 24.4583 179.408 24.7577 180.461 25.3567C181.514 25.9556 182.333 26.81 182.918 27.9198C183.52 29.0296 183.821 30.3243 183.821 31.8041ZM179.433 30.615C179.433 29.8399 179.182 29.2233 178.681 28.7653C178.179 28.3073 177.552 28.0783 176.8 28.0783C176.082 28.0783 175.471 28.2985 174.97 28.7389C174.485 29.1793 174.184 29.8047 174.067 30.615H179.433Z" fill="white"/>
            <path d="M185.23 32.0155C185.23 30.5005 185.498 29.1705 186.033 28.0255C186.584 26.8805 187.328 25.9997 188.265 25.3831C189.201 24.7665 190.245 24.4583 191.399 24.4583C192.385 24.4583 193.246 24.6697 193.982 25.0925C194.734 25.5152 195.31 26.0701 195.712 26.7571V24.6697H200V39.4141H195.712V37.3266C195.294 38.0136 194.709 38.5685 193.957 38.9913C193.221 39.4141 192.36 39.6255 191.374 39.6255C190.237 39.6255 189.201 39.3172 188.265 38.7007C187.328 38.0665 186.584 37.1769 186.033 36.0319C185.498 34.8692 185.23 33.5304 185.23 32.0155ZM195.712 32.0419C195.712 30.9145 195.411 30.0249 194.809 29.3731C194.224 28.7213 193.505 28.3954 192.653 28.3954C191.8 28.3954 191.073 28.7213 190.471 29.3731C189.886 30.0073 189.594 30.8881 189.594 32.0155C189.594 33.1429 189.886 34.0413 190.471 34.7107C191.073 35.3625 191.8 35.6883 192.653 35.6883C193.505 35.6883 194.224 35.3625 194.809 34.7107C195.411 34.0589 195.712 33.1693 195.712 32.0419Z" fill="white"/>
            </g>
            </svg>
            
        </Link>
      </div>
      <div className="col-12 col-lg-3">
        <Link>
          <svg width="240" height="60" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.0387 30L24.5174 34.5174L20 30L24.5174 25.4826L29.0387 30ZM40 19.0309L47.7413 26.7761L52.2587 22.2587L40 10L27.7413 22.2587L32.2587 26.7761L40 19.0309ZM55.4865 25.4826L50.9691 30L55.4865 34.5174L60 30L55.4865 25.4826ZM40 40.9691L32.2587 33.2278L27.7413 37.7413L40 50L52.2587 37.7413L47.7413 33.2278L40 40.9691ZM40 34.5174L44.5174 30L40 25.4826L35.4826 30L40 34.5174ZM87.6749 34.9512V34.8886C87.6749 31.9422 86.1118 30.4689 83.5678 29.4998C85.1309 28.6206 86.4517 27.2411 86.4517 24.7675V24.705C86.4517 21.2583 83.6929 19.0309 79.2106 19.0309H69.0348V40.9691H79.4686C84.4197 40.9691 87.6827 38.9644 87.6827 34.9512H87.6749ZM81.6569 25.5725C81.6569 27.202 80.3087 27.8937 78.179 27.8937H73.7358V23.263H78.4994C80.5354 23.263 81.6647 24.0758 81.6647 25.5178L81.6569 25.5725ZM82.88 34.3494C82.88 35.9789 81.5944 36.7292 79.4607 36.7292H73.7358V31.9109H79.3122C81.7898 31.9109 82.8879 32.8214 82.8879 34.2946L82.88 34.3494ZM97.8156 40.9691V19.0309H92.9738V40.9691H97.8156ZM123.759 40.9691V19.0309H118.98V32.5401L108.703 19.0309H104.252V40.9691H109.015V27.0223L119.637 40.9691H123.759ZM150.492 40.9691L141.075 18.8746H136.624L127.225 40.9691H132.145L134.158 36.0492H143.435L145.44 40.9691H150.492ZM141.719 31.7859H135.873L138.789 24.6737L141.719 31.7859ZM173.497 40.9691V19.0309H168.718V32.5401L158.437 19.0309H153.99V40.9691H158.75V27.0223L169.375 40.9691H173.497ZM198.41 37.4287L195.342 34.3259C193.619 35.889 192.083 36.8933 189.574 36.8933C185.815 36.8933 183.212 33.7671 183.212 30V29.9375C183.212 26.1782 185.877 23.1067 189.574 23.1067C191.766 23.1067 193.482 24.0445 195.186 25.5803L198.245 22.0399C196.209 20.0352 193.736 18.6557 189.598 18.6557C182.861 18.6557 178.159 23.7632 178.159 29.9883V30.0508C178.159 36.3501 182.954 41.3326 189.41 41.3326C193.634 41.3443 196.139 39.8398 198.394 37.4287H198.41ZM219.004 40.9691V36.6706H207.077V32.0555H217.421V27.7569H207.077V23.3255H218.832V19.027H202.282V40.9652L219.004 40.9691Z" fill="white" fill-opacity="0.5"/>
            </svg>
            
        </Link>
      </div>
      <div className="col-12 col-lg-3">
        <Link>
          <svg width="240" height="60" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
            <path d="M76.6133 30C76.6133 41.0451 68.4165 50 58.3066 50C48.1967 50 40 41.0451 40 30C40 18.9549 48.1967 10 58.3066 10C68.4187 10 76.6133 18.9549 76.6133 30Z" fill="white"/>
            <path d="M49.032 30.6723L49.111 30.5367L53.8733 22.3976C53.9429 22.2784 54.1065 22.2907 54.1592 22.4202C54.9548 24.3681 55.6413 26.7908 55.3196 28.299C55.1823 28.9196 54.8062 29.76 54.383 30.5367C54.3285 30.6497 54.2683 30.7607 54.2043 30.8675C54.1742 30.9168 54.1234 30.9456 54.0689 30.9456H49.1712C49.0395 30.9456 48.9624 30.7894 49.032 30.6723Z" fill="#141E36"/>
            <path d="M70.2585 32.1844V33.4728C70.2585 33.5467 70.2171 33.6125 70.1569 33.6412C69.7883 33.8138 68.5263 34.4467 68.0015 35.244C66.6623 37.2803 65.6392 40.192 63.3521 40.192H53.8106C50.4289 40.192 47.6885 37.1879 47.6885 33.481V33.3618C47.6885 33.2632 47.7618 33.183 47.8521 33.183H53.1711C53.2764 33.183 53.3535 33.2899 53.3442 33.4029C53.3065 33.781 53.3705 34.1673 53.5341 34.5186C53.8501 35.2194 54.5046 35.657 55.2118 35.657H57.845V33.4111H55.2419C55.1084 33.4111 55.0294 33.2426 55.1065 33.1234C55.1347 33.0762 55.1667 33.0269 55.2005 32.9714C55.4469 32.5892 55.7986 31.9954 56.1485 31.3193C56.3873 30.8632 56.6187 30.3762 56.8049 29.8871C56.8425 29.7988 56.8726 29.7083 56.9027 29.62C56.9535 29.4638 57.0061 29.3179 57.0437 29.172C57.0814 29.0487 57.1114 28.9193 57.1415 28.798C57.23 28.383 57.2676 27.9432 57.2676 27.4871C57.2676 27.3083 57.2601 27.1213 57.245 26.9426C57.2375 26.7474 57.2149 26.5521 57.1923 26.3569C57.1773 26.1843 57.1491 26.0138 57.119 25.835C57.0814 25.574 57.0287 25.3152 56.9685 25.0542L56.9478 24.9556C56.9027 24.7768 56.8651 24.6062 56.8124 24.4275C56.6638 23.8665 56.4927 23.3199 56.3121 22.8083C56.2463 22.6048 56.171 22.4096 56.0958 22.2144C55.9849 21.9206 55.872 21.6535 55.7685 21.4007C55.7159 21.2856 55.6708 21.1808 55.6256 21.074C55.5748 20.9528 55.5222 20.8315 55.4695 20.7165C55.4319 20.6281 55.3886 20.5459 55.3585 20.4637L55.0369 19.8144C54.9918 19.726 55.067 19.6212 55.1554 19.648L57.1679 20.2438H57.1735C57.1773 20.2438 57.1792 20.2459 57.181 20.2459L57.4462 20.326L57.7378 20.4165L57.845 20.4493V19.1425C57.845 18.5116 58.3077 18 58.8795 18C59.1653 18 59.4249 18.1274 59.6111 18.3349C59.7973 18.5425 59.9139 18.826 59.9139 19.1425V21.0822L60.1283 21.148C60.1453 21.1542 60.1622 21.1624 60.1772 21.1747C60.2299 21.2178 60.3051 21.2815 60.401 21.3596C60.4763 21.4254 60.5572 21.5055 60.655 21.5877C60.8487 21.7582 61.08 21.9781 61.3339 22.2309C61.4016 22.2946 61.4675 22.3603 61.5277 22.4261C61.855 22.759 62.2217 23.1494 62.5715 23.5809C62.6693 23.7021 62.7653 23.8254 62.8631 23.9548C62.9609 24.0864 63.0643 24.2158 63.1546 24.3453C63.2731 24.5179 63.401 24.6966 63.512 24.8836C63.5646 24.972 63.6248 25.0624 63.6756 25.1508C63.8185 25.387 63.9445 25.6316 64.0649 25.8761C64.1157 25.9891 64.1684 26.1124 64.2135 26.2336C64.347 26.5604 64.4524 26.8932 64.5201 27.2261C64.5408 27.298 64.5558 27.3761 64.5633 27.446V27.4624C64.5859 27.561 64.5934 27.6658 64.6009 27.7727C64.631 28.1138 64.616 28.4549 64.5483 28.798C64.5201 28.944 64.4825 29.0816 64.4373 29.2275C64.3922 29.3672 64.347 29.5131 64.2887 29.6508C64.1759 29.9364 64.0423 30.222 63.8843 30.4892C63.8336 30.5878 63.7734 30.6926 63.7132 30.7912C63.6474 30.896 63.5797 30.9946 63.5195 31.0912C63.4367 31.2145 63.3483 31.344 63.258 31.459C63.1772 31.5803 63.0944 31.7015 63.0041 31.8084C62.8781 31.9707 62.7577 32.1248 62.6317 32.2728C62.5565 32.3693 62.4756 32.468 62.3928 32.5563C62.312 32.6549 62.2292 32.7433 62.154 32.8255C62.028 32.9632 61.9226 33.07 61.8342 33.1584L61.6274 33.3659C61.5973 33.3947 61.5578 33.4111 61.5164 33.4111H59.9139V35.657H61.9302C62.3816 35.657 62.8104 35.4824 63.1565 35.1618C63.275 35.0488 63.7922 34.5598 64.4035 33.8221C64.4241 33.7974 64.4505 33.7789 64.4806 33.7707L70.0497 32.0118C70.1532 31.9789 70.2585 32.0652 70.2585 32.1844Z" fill="#141E36"/>
            <path d="M94.4523 39.599C92.7974 39.599 91.2761 39.1938 89.8888 38.3835C88.518 37.5731 87.4229 36.4457 86.6039 35.0013C85.8017 33.5391 85.4004 31.9009 85.4004 30.0865C85.4004 28.272 85.8017 26.6425 86.6039 25.1981C87.4229 23.7536 88.518 22.6261 89.8888 21.8158C91.2761 21.0055 92.7974 20.6003 94.4523 20.6003C96.1072 20.6003 97.6201 21.0055 98.9909 21.8158C100.379 22.6261 101.465 23.7536 102.251 25.1981C103.053 26.6425 103.454 28.272 103.454 30.0865C103.454 31.9009 103.053 33.5391 102.251 35.0013C101.448 36.4457 100.362 37.5731 98.9909 38.3835C97.6201 39.1938 96.1072 39.599 94.4523 39.599ZM94.4523 35.4769C95.8564 35.4769 96.9764 34.9836 97.8123 33.9971C98.665 33.0107 99.0912 31.7071 99.0912 30.0865C99.0912 28.4482 98.665 27.1446 97.8123 26.1757C96.9764 25.1893 95.8564 24.696 94.4523 24.696C93.0313 24.696 91.8948 25.1805 91.0421 26.1493C90.2062 27.1182 89.7885 28.4305 89.7885 30.0865C89.7885 31.7247 90.2062 33.0371 91.0421 34.0236C91.8948 34.9925 93.0313 35.4769 94.4523 35.4769Z" fill="white"/>
            <path d="M110.128 26.7571C110.545 26.0701 111.122 25.5152 111.858 25.0925C112.593 24.6697 113.454 24.4583 114.44 24.4583C115.594 24.4583 116.639 24.7665 117.575 25.3831C118.511 25.9997 119.246 26.8805 119.781 28.0255C120.333 29.1705 120.609 30.5005 120.609 32.0155C120.609 33.5304 120.333 34.8692 119.781 36.0318C119.246 37.1769 118.511 38.0665 117.575 38.7007C116.639 39.3172 115.594 39.6254 114.44 39.6254C113.471 39.6254 112.61 39.4141 111.858 38.9913C111.122 38.5685 110.545 38.0225 110.128 37.353V43.8004H105.84V24.6697H110.128V26.7571ZM116.246 32.0155C116.246 30.8881 115.945 30.0073 115.343 29.3731C114.758 28.7213 114.031 28.3954 113.161 28.3954C112.309 28.3954 111.582 28.7213 110.98 29.3731C110.395 30.0249 110.102 30.9145 110.102 32.0419C110.102 33.1693 110.395 34.0589 110.98 34.7107C111.582 35.3625 112.309 35.6883 113.161 35.6883C114.014 35.6883 114.741 35.3625 115.343 34.7107C115.945 34.0413 116.246 33.1429 116.246 32.0155Z" fill="white"/>
            <path d="M136.047 31.8041C136.047 32.2269 136.023 32.6672 135.972 33.1253H126.268C126.335 34.0413 126.611 34.7459 127.096 35.2391C127.597 35.7148 128.207 35.9526 128.926 35.9526C129.996 35.9526 130.74 35.4769 131.158 34.5257H135.722C135.488 35.4946 135.061 36.3665 134.443 37.1417C133.841 37.9167 133.08 38.5245 132.161 38.9649C131.242 39.4053 130.213 39.6255 129.077 39.6255C127.706 39.6255 126.486 39.3172 125.416 38.7007C124.346 38.0841 123.51 37.2033 122.908 36.0583C122.307 34.9133 122.006 33.5745 122.006 32.0419C122.006 30.5093 122.298 29.1705 122.883 28.0255C123.485 26.8805 124.321 25.9997 125.391 25.3831C126.461 24.7665 127.689 24.4583 129.077 24.4583C130.431 24.4583 131.634 24.7577 132.687 25.3567C133.741 25.9556 134.56 26.81 135.145 27.9198C135.747 29.0296 136.047 30.3243 136.047 31.8041ZM131.66 30.615C131.66 29.8399 131.409 29.2233 130.907 28.7653C130.406 28.3073 129.779 28.0783 129.027 28.0783C128.308 28.0783 127.698 28.2985 127.196 28.7389C126.711 29.1793 126.41 29.8047 126.294 30.615H131.66Z" fill="white"/>
            <path d="M146.835 24.5105C148.473 24.5105 149.777 25.0742 150.746 26.2016C151.733 27.3114 152.226 28.844 152.226 30.7993V39.4135H147.963V31.4071C147.963 30.4206 147.721 29.6543 147.236 29.1082C146.751 28.5621 146.099 28.2891 145.28 28.2891C144.461 28.2891 143.809 28.5621 143.324 29.1082C142.84 29.6543 142.597 30.4206 142.597 31.4071V39.4135H138.31V24.669H142.597V26.6244C143.032 25.9726 143.617 25.4617 144.353 25.0918C145.088 24.7043 145.915 24.5105 146.835 24.5105Z" fill="white"/>
            <path d="M161.575 39.599C160.288 39.599 159.134 39.3788 158.114 38.9384C157.095 38.498 156.276 37.8462 155.657 36.983C155.055 36.1199 154.737 35.0805 154.704 33.865H159.268C159.335 34.5521 159.56 35.0805 159.945 35.4505C160.329 35.8028 160.831 35.9789 161.449 35.9789C162.085 35.9789 162.586 35.8292 162.954 35.5297C163.321 35.2127 163.506 34.7811 163.506 34.235C163.506 33.7769 163.355 33.3982 163.054 33.0987C162.77 32.7993 162.41 32.5527 161.976 32.3589C161.558 32.1651 160.956 31.9449 160.17 31.6983C159.034 31.3283 158.106 30.9584 157.387 30.5885C156.668 30.2186 156.05 29.6725 155.532 28.9502C155.013 28.228 154.754 27.2855 154.754 26.1229C154.754 24.3965 155.348 23.0489 156.535 22.0801C157.721 21.0936 159.268 20.6003 161.173 20.6003C163.113 20.6003 164.675 21.0936 165.862 22.0801C167.049 23.0489 167.685 24.4053 167.768 26.1493H163.129C163.096 25.5504 162.887 25.0835 162.502 24.7489C162.118 24.3965 161.625 24.2204 161.023 24.2204C160.505 24.2204 160.087 24.3701 159.769 24.6696C159.452 24.9514 159.293 25.3654 159.293 25.9115C159.293 26.5104 159.56 26.9773 160.095 27.3119C160.63 27.6467 161.466 28.0078 162.603 28.3953C163.74 28.8005 164.659 29.188 165.361 29.558C166.08 29.9279 166.698 30.4652 167.216 31.1698C167.735 31.8745 167.994 32.7817 167.994 33.8915C167.994 34.9484 167.735 35.9085 167.216 36.7716C166.715 37.6348 165.98 38.3218 165.01 38.8327C164.04 39.3435 162.895 39.599 161.575 39.599Z" fill="white"/>
            <path d="M183.821 31.8041C183.821 32.2269 183.796 32.6672 183.746 33.1253H174.042C174.109 34.0413 174.385 34.7459 174.869 35.2391C175.371 35.7148 175.981 35.9526 176.7 35.9526C177.77 35.9526 178.514 35.4769 178.932 34.5257H183.495C183.261 35.4946 182.835 36.3665 182.216 37.1417C181.615 37.9167 180.854 38.5245 179.934 38.9649C179.015 39.4053 177.987 39.6255 176.85 39.6255C175.48 39.6255 174.259 39.3172 173.189 38.7007C172.12 38.0841 171.284 37.2033 170.682 36.0583C170.08 34.9133 169.779 33.5745 169.779 32.0419C169.779 30.5093 170.072 29.1705 170.657 28.0255C171.258 26.8805 172.094 25.9997 173.164 25.3831C174.234 24.7665 175.463 24.4583 176.85 24.4583C178.204 24.4583 179.408 24.7577 180.461 25.3567C181.514 25.9556 182.333 26.81 182.918 27.9198C183.52 29.0296 183.821 30.3243 183.821 31.8041ZM179.433 30.615C179.433 29.8399 179.182 29.2233 178.681 28.7653C178.179 28.3073 177.552 28.0783 176.8 28.0783C176.082 28.0783 175.471 28.2985 174.97 28.7389C174.485 29.1793 174.184 29.8047 174.067 30.615H179.433Z" fill="white"/>
            <path d="M185.23 32.0155C185.23 30.5005 185.498 29.1705 186.033 28.0255C186.584 26.8805 187.328 25.9997 188.265 25.3831C189.201 24.7665 190.245 24.4583 191.399 24.4583C192.385 24.4583 193.246 24.6697 193.982 25.0925C194.734 25.5152 195.31 26.0701 195.712 26.7571V24.6697H200V39.4141H195.712V37.3266C195.294 38.0136 194.709 38.5685 193.957 38.9913C193.221 39.4141 192.36 39.6255 191.374 39.6255C190.237 39.6255 189.201 39.3172 188.265 38.7007C187.328 38.0665 186.584 37.1769 186.033 36.0319C185.498 34.8692 185.23 33.5304 185.23 32.0155ZM195.712 32.0419C195.712 30.9145 195.411 30.0249 194.809 29.3731C194.224 28.7213 193.505 28.3954 192.653 28.3954C191.8 28.3954 191.073 28.7213 190.471 29.3731C189.886 30.0073 189.594 30.8881 189.594 32.0155C189.594 33.1429 189.886 34.0413 190.471 34.7107C191.073 35.3625 191.8 35.6883 192.653 35.6883C193.505 35.6883 194.224 35.3625 194.809 34.7107C195.411 34.0589 195.712 33.1693 195.712 32.0419Z" fill="white"/>
            </g>
            </svg>
        </Link>
      </div>
      <div className="col-12 col-lg-3">
        <Link>
          <svg width="240" height="60" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.0387 30L24.5174 34.5174L20 30L24.5174 25.4826L29.0387 30ZM40 19.0309L47.7413 26.7761L52.2587 22.2587L40 10L27.7413 22.2587L32.2587 26.7761L40 19.0309ZM55.4865 25.4826L50.9691 30L55.4865 34.5174L60 30L55.4865 25.4826ZM40 40.9691L32.2587 33.2278L27.7413 37.7413L40 50L52.2587 37.7413L47.7413 33.2278L40 40.9691ZM40 34.5174L44.5174 30L40 25.4826L35.4826 30L40 34.5174ZM87.6749 34.9512V34.8886C87.6749 31.9422 86.1118 30.4689 83.5678 29.4998C85.1309 28.6206 86.4517 27.2411 86.4517 24.7675V24.705C86.4517 21.2583 83.6929 19.0309 79.2106 19.0309H69.0348V40.9691H79.4686C84.4197 40.9691 87.6827 38.9644 87.6827 34.9512H87.6749ZM81.6569 25.5725C81.6569 27.202 80.3087 27.8937 78.179 27.8937H73.7358V23.263H78.4994C80.5354 23.263 81.6647 24.0758 81.6647 25.5178L81.6569 25.5725ZM82.88 34.3494C82.88 35.9789 81.5944 36.7292 79.4607 36.7292H73.7358V31.9109H79.3122C81.7898 31.9109 82.8879 32.8214 82.8879 34.2946L82.88 34.3494ZM97.8156 40.9691V19.0309H92.9738V40.9691H97.8156ZM123.759 40.9691V19.0309H118.98V32.5401L108.703 19.0309H104.252V40.9691H109.015V27.0223L119.637 40.9691H123.759ZM150.492 40.9691L141.075 18.8746H136.624L127.225 40.9691H132.145L134.158 36.0492H143.435L145.44 40.9691H150.492ZM141.719 31.7859H135.873L138.789 24.6737L141.719 31.7859ZM173.497 40.9691V19.0309H168.718V32.5401L158.437 19.0309H153.99V40.9691H158.75V27.0223L169.375 40.9691H173.497ZM198.41 37.4287L195.342 34.3259C193.619 35.889 192.083 36.8933 189.574 36.8933C185.815 36.8933 183.212 33.7671 183.212 30V29.9375C183.212 26.1782 185.877 23.1067 189.574 23.1067C191.766 23.1067 193.482 24.0445 195.186 25.5803L198.245 22.0399C196.209 20.0352 193.736 18.6557 189.598 18.6557C182.861 18.6557 178.159 23.7632 178.159 29.9883V30.0508C178.159 36.3501 182.954 41.3326 189.41 41.3326C193.634 41.3443 196.139 39.8398 198.394 37.4287H198.41ZM219.004 40.9691V36.6706H207.077V32.0555H217.421V27.7569H207.077V23.3255H218.832V19.027H202.282V40.9652L219.004 40.9691Z" fill="white" fill-opacity="0.5"/>
            </svg>
        </Link>
      </div>
    </div>
  </div>
</section>
   );
}

export default BrandSection;