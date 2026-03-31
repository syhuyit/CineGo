const movies = [
  {
    //top trending
    id: 1,
    name: "Avengers",
    price: 50000,
    type: "Hành động",
    image: "/images/avengerss.jpeg",
    description:
      "Avengers Assemble là một loạt phim hoạt hình siêu anh hùng của Mỹ dựa trên nhóm siêu anh hùng Avengers của Marvel Comics. Được thiết kế để tận dụng thành công của bộ phim The Avengers năm 2012, loạt phim này đã được công chiếu trên Disney XD vào ngày 26 tháng 5 năm 2013, là phần tiếp theo của The Avengers: Earth's Mightiest Heroes. Trước đó, phim đã được phát sóng cùng với Ultimate Spider-Man và Guardians of the Galaxy như một phần của chương trình Marvel Universe. Joe Casey, Joe Kelly, Duncan Rouleau và Steven T. Seagle, được biết đến với tên gọi chung là Man of Action, đã phát triển loạt phim và là nhà sản xuất điều hành của mùa 1 và 2.",
    showtimes: ["9:00", "20:00"],
    status: "trending",
  },
  {
    id: 2,
    name: "Godzilla vs Kong",
    price: 60000,
    type: "Hành động",
    image: "/images/godzivskong.jpg",
    description:
      "Godzilla vs. Kong là một bộ phim quái vật Mỹ năm 2021 do Adam Wingard đạo diễn. Được sản xuất bởi Legendary Pictures và phân phối bởi Warner Bros. Pictures, đây là phần tiếp theo của Kong: Skull Island (2017) và Godzilla: King of the Monsters (2019), và là bộ phim thứ tư trong Vũ trụ Quái vật (Monsterverse). Đây cũng là bộ phim thứ 36 trong loạt phim Godzilla, bộ phim thứ 12 trong loạt phim King Kong, và là bộ phim Godzilla thứ tư được sản xuất hoàn toàn bởi một hãng phim Mỹ. Phim có sự tham gia của các diễn viên Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall, Brian Tyree Henry, Shun Oguri, Eiza González, Julian Dennison, Lance Reddick, Kyle Chandler và Demián Bichir. Brown và Chandler tiếp tục đảm nhận vai diễn của họ từ bộ phim Godzilla trước đó. Trong phim, Kong đụng độ với Godzilla sau khi tổ chức Monarch di chuyển con khỉ đột từ Đảo Skull đến Trái Đất Rỗng, quê hương của những quái vật được gọi là Titan, để lấy nguồn năng lượng cho một vũ khí bí mật nhằm ngăn chặn các cuộc tấn công bí ẩn của Godzilla.",
    showtimes: ["12:00"],
    status: "trending",
  },
  {
    id: 3,
    name: "Dr.Stone",
    price: 36000,
    type: "Anime",
    image: "/images/drstone.jpg",
    description:
      "Dr. Stone là một bộ phim hoạt hình Nhật Bản dựa trên loạt truyện tranh cùng tên của Rumiko Takahashi. Phim kể về một cậu bé tên là Senku Ishigami, người sau khi bị biến thành đá bởi một tia sáng bí ẩn, đã sử dụng kiến thức khoa học để khôi phục thế giới và xây dựng lại nền văn minh. Phim có sự tham gia của các diễn viên như Yuki Kajiura, Yuki Kajiura, và các diễn viên khác.",
    showtimes: ["19:00", "21:00"],
    status: "trending",
  },
  {
    id: 4,
    name: "Overlord",
    price: 36000,
    type: "Anime",
    image: "/images/overlord.jpg",
    description:
      "Overlord là một bộ phim hoạt hình Nhật Bản dựa trên loạt truyện tranh cùng tên của Kugane Maruyama. Phim kể về một chàng trai tên là Ainz Ooal Gown, người sau khi bị biến thành một sinh vật siêu nhiên, đã trở thành lãnh chúa của một thế giới khác. Phim có sự tham gia của các diễn viên như Yuki Kajiura, Yuki Kajiura, và các diễn viên khác.",
    showtimes: ["09:00"],
    status: "trending",
  },
  {
    id: 5,
    name: "BoJack Horseman",
    price: 45000,
    type: "Hoạt hình",
    image: "/images/bojack.jpg",
    description:
      "BoJack Horseman là một loạt phim hoạt hình Mỹ, kể về cuộc sống của BoJack Horseman, một diễn viên hài nổi tiếng nhưng đang đối mặt với những vấn đề trong cuộc sống cá nhân và nghề nghiệp.",
    showtimes: ["08:00", "14:00"],
    status: "trending",
  },
  {
    id: 6,
    name: "Pacific Rim",
    price: 50000,
    type: "Hành động",
    image: "/images/Pacific_Rim.jpg",
    description:
      "Pacific Rim là một bộ phim khoa học viễn tưởng hành động kể về các robot khổng lồ được điều khiển bởi con người để chống lại các sinh vật biển nguy hiểm đến từ thế giới bên kia.",
    showtimes: ["21:00", "22:00"],
    status: "trending",
  },
  {
    id: 7,
    name: "Dr.Strange",
    price: 65000,
    type: "Hành động",
    image: "/images/drstrange.jpg",
    description:
      "Dr. Strange là một bộ phim siêu anh hùng dựa trên nhân vật cùng tên từ truyện tranh Marvel. Phim kể về Stephen Strange, một bác sĩ tài năng nhưng sau một tai nạn nghiêm trọng, anh phải tìm đến các nghệ thuật phép thuật để cứu lấy cuộc sống của mình.",
    showtimes: ["18:00", "20:00"],
    status: "trending",
  },

  //upcoming
  {
    id: 13,
    name: "Titanic",
    price: 40000,
    type: "Tình cảm",
    image: "/images/titanic.webp",
    description:
      "Titanic là một bộ phim sử thi lãng mạn lịch sử thảm họa của Mỹ năm 1997 do James Cameron viết kịch bản và đạo diễn. Kết hợp cả yếu tố lịch sử và hư cấu, phim dựa trên những ghi chép về vụ chìm tàu ​​RMS Titanic năm 1912. Leonardo DiCaprio và Kate Winslet đóng vai hai người thuộc hai tầng lớp xã hội khác nhau, yêu nhau trong chuyến hải hành định mệnh đầu tiên của con tàu. Dàn diễn viên còn có Billy Zane, Kathy Bates, Frances Fisher, Bernard Hill, Jonathan Hyde, Danny Nucci, David Warner và Bill Paxton.",
    showtimes: ["8:00", "21:00"],
    status: "upcoming",
    releaseDate: "30/9/2026",
  },
  {
    id: 14,
    name: "Dan Da Dan",
    price: 45000,
    type: "Anime",
    image: "/images/dandandan.jpg",
    description:
      "Dan Da Dan là bộ anime hành động, kinh dị, hài hước nổi tiếng của Nhật Bản (tác giả Tatsu Yukinobu, từ 2021). Câu chuyện xoay quanh Momo Ayase - nữ sinh tin vào ma và Okarun - nam sinh cuồng người ngoài hành tinh. Họ phải đối mặt với các thế lực siêu nhiên và người ngoài hành tinh kỳ quái, tạo nên một hành trình độc đáo, hài hước và kịch tính.",
    showtimes: ["09:00"],
    status: "upcoming",
    releaseDate: "01/01/2027",
  },
  {
    id: 15,
    name: "JoJO Bizarre Adventure Part 4",
    price: 36000,
    type: "Anime",
    image: "/images/jojop4.jpg",
    description:
      "JoJo's Bizarre Adventure Part 4: Diamond Is Unbreakable (1992-1995) lấy bối cảnh năm 1999 tại thị trấn Morioh, xoay quanh Josuke Higashikata - con trai ngoài giá thú của Joseph Joestar. Phần này mang phong cách trinh thám, đời thường xen lẫn kinh dị, khi Josuke và bạn bè săn lùng kẻ giết người hàng loạt sở hữu Stand.",
    showtimes: ["20:00", "21:00"],
    status: "upcoming",
    releaseDate: "24/7/2026",
  },
  {
    id: 16,
    name: "Spider Man No Way Home",
    price: 65000,
    type: "Hành động",
    image: "/images/Spider-Man_No_Way_Home.jpg",
    description:
      "Spider-Man No Way Home: (Người Nhện: Không Còn Nhà) là bom tấn siêu anh hùng 2021, xoay quanh việc Peter Parker (Tom Holland) nhờ Doctor Strange xóa ký ức thế giới về danh tính Người Nhện sau khi bị Mysterio tiết lộ. Phép thuật sai sót mở ra đa vũ trụ, khiến các phản diện từ các phần phim trước quay lại, tạo nên cuộc phiêu lưu đầy cảm xúc và tri ân di sản 20 năm của thương hiệu",
    showtimes: ["22:00", "23:00"],
    status: "upcoming",
    releaseDate: "06/12/2026",
  },

  //normal
  {
    id: 19,
    name: "JoJO Bizarre Adventure Part 1",
    price: 36000,
    type: "Anime",
    image: "/images/jojop1.jpg",
    description:
      "JoJo's Bizarre Adventure Phần 1: Phantom Blood (Máu Ma Cà Rồng) là câu chuyện kinh điển về cuộc đối đầu giữa Jonathan Joestar và anh trai nuôi tham vọng Dio Brando tại nước Anh những năm 1880. Dio sử dụng mặt nạ đá bí ẩn để biến thành ma cà rồng nhằm chiếm đoạt gia tài, buộc Jonathan phải học kỹ thuật thở Gợn Sóng (Hamon) để chiến đấu",
    showtimes: ["13:00", "15:00"],
    status: "",
  },

  {
    id: 20,
    name: "JoJO Bizarre Adventure Part 2",
    price: 36000,
    type: "Anime",
    image: "/images/jojop2.jpg",
    description:
      "JoJo Part 2: Battle Tendency (1938-1939) theo chân Joseph Joestar, cháu nội của Jonathan, chiến đấu chống lại các Pillar Men (Người Cột) cổ đại nhằm bảo vệ nhân loại và giành lại Viên đá Đỏ Aja. Phần này nổi bật với nhịp độ nhanh, yếu tố hài hước, chiến thuật thông minh và bối cảnh Thế chiến II tại Âu-Mỹ",
    showtimes: ["20:00", "21:00"],
    status: "",
  },
  {
    id: 21,
    name: "JoJO Bizarre Adventure Part 3",
    price: 36000,
    type: "Anime",
    image: "/images/jojop3.jpg",
    description:
      "JoJo's Bizarre Adventure Part 3: Stardust Crusaders (Những Chiến binh Bụi sao) là phần nổi tiếng nhất, kể về hành trình của Jotaro Kujo và đồng đội từ Tokyo đến Cairo, Ai Cập, nhằm đánh bại DIO để cứu mẹ. Đây là phần đầu tiên giới thiệu hệ thống Stand (linh hồn chiến đấu), thay thế cho Hamon. Phần này nổi bật với các trận chiến Stand độc đáo, nhân vật đa dạng và cốt truyện hấp dẫn, trở thành biểu tượng của loạt JoJo.",
    showtimes: ["20:00", "21:00"],
    status: "",
  },
];
