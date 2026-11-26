// =========================================================================
// DASHBOARD ĐIỀU HÀNH & QUẢN TRỊ LỚP 10B - TRƯỜNG THPT LAI VUNG 1
// TÍCH HỢP ĐẦY ĐỦ CÁC KẾ HOẠCH NĂM HỌC 2026 - 2027 TỪ SỞ GDĐT ĐỒNG THÁP
// =========================================================================

const OFFICIAL_STUDENTS_LIST = [
  { id: "hs_laivung_1", stt: 1, code: "2602032743", name: "Châu Á Anh", gender: "Nữ", dob: "25/02/2011", team: 1, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_2", stt: 2, code: "2602032763", name: "Nguyễn Trần Hoài Anh", gender: "Nữ", dob: "10/06/2011", team: 1, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_3", stt: 3, code: "2602032783", name: "Nguyễn Gia Bảo", gender: "Nam", dob: "19/12/2011", team: 1, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_4", stt: 4, code: "2602032803", name: "Nguyễn Thị Ngọc Cẩm", gender: "Nữ", dob: "16/09/2011", team: 1, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_5", stt: 5, code: "2602032823", name: "Nguyễn Ngọc Bảo Châu", gender: "Nữ", dob: "19/02/2011", team: 1, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_6", stt: 6, code: "2602032843", name: "Võ Thành Danh", gender: "Nam", dob: "10/08/2011", team: 1, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_7", stt: 7, code: "2602028363", name: "Lư Gia Dĩ", gender: "Nam", dob: "22/12/2011", team: 1, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_8", stt: 8, code: "2602032863", name: "Lâm Quốc Đạt", gender: "Nam", dob: "25/01/2011", team: 1, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_9", stt: 9, code: "2602032883", name: "Lê Phước Đạt", gender: "Nam", dob: "08/03/2011", team: 1, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_10", stt: 10, code: "2602032903", name: "Nguyễn Trần Khánh Đăng", gender: "Nam", dob: "23/09/2011", team: 1, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_11", stt: 11, code: "2602032943", name: "Huỳnh Ngọc Hân", gender: "Nữ", dob: "23/01/2011", team: 1, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_12", stt: 12, code: "2602032963", name: "Trần Trung Hậu", gender: "Nam", dob: "31/07/2011", team: 2, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_13", stt: 13, code: "2602032983", name: "Huỳnh Huy Hoàng", gender: "Nam", dob: "18/12/2011", team: 2, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_14", stt: 14, code: "2602033003", name: "Trần Gia Huy", gender: "Nam", dob: "18/04/2011", team: 2, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_15", stt: 15, code: "2602033023", name: "Trương Hoàng Huy", gender: "Nam", dob: "29/05/2011", team: 2, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_16", stt: 16, code: "2602033043", name: "Phạm Anh Kiệt", gender: "Nam", dob: "10/07/2011", team: 2, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_17", stt: 17, code: "2602033063", name: "Nguyễn Thị Hồng Lan", gender: "Nữ", dob: "25/12/2010", team: 2, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_18", stt: 18, code: "2602033083", name: "Phạm Hoàng Luân", gender: "Nam", dob: "07/09/2011", team: 2, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_19", stt: 19, code: "2602033103", name: "Bạch Thị Trúc Ly", gender: "Nữ", dob: "11/03/2011", team: 2, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_20", stt: 20, code: "2602033123", name: "Đoàn Ngọc Thảo Ly", gender: "Nữ", dob: "16/10/2011", team: 2, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_21", stt: 21, code: "2602033143", name: "Trần Tuyết Minh", gender: "Nữ", dob: "20/06/2011", team: 2, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Hoa" },
  { id: "hs_laivung_22", stt: 22, code: "2602033163", name: "Lê Thị Thùy Ngân", gender: "Nữ", dob: "12/05/2011", team: 2, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_23", stt: 23, code: "2602033183", name: "Nguyễn Trần Kim Ngân", gender: "Nữ", dob: "17/03/2011", team: 3, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_24", stt: 24, code: "2602033203", name: "Phùng Nguyễn Kim Ngân", gender: "Nữ", dob: "13/03/2011", team: 3, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_25", stt: 25, code: "2602033223", name: "Đinh Như Ngọc", gender: "Nữ", dob: "23/09/2011", team: 3, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_26", stt: 26, code: "2602033243", name: "Trần Thị Bích Nguyên", gender: "Nữ", dob: "22/10/2011", team: 3, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_27", stt: 27, code: "2602033263", name: "Trần Lê Uyên Nhi", gender: "Nữ", dob: "07/07/2011", team: 3, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_28", stt: 28, code: "2602033283", name: "Võ Minh Nhựt", gender: "Nam", dob: "11/11/2011", team: 3, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_29", stt: 29, code: "2602033303", name: "Nguyễn Thị Ngọc Phụng", gender: "Nữ", dob: "28/12/2011", team: 3, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_30", stt: 30, code: "2602033323", name: "Trần Minh Quang", gender: "Nam", dob: "22/09/2011", team: 3, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_31", stt: 31, code: "2602033343", name: "Huỳnh Minh Quân", gender: "Nam", dob: "09/07/2011", team: 3, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_32", stt: 32, code: "2602033363", name: "Phạm Như Quỳnh", gender: "Nữ", dob: "10/04/2011", team: 3, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_33", stt: 33, code: "2602033383", name: "Dương Thị Hồng Sim", gender: "Nữ", dob: "02/12/2011", team: 3, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_34", stt: 34, code: "2602033403", name: "Nguyễn Tường Sơn", gender: "Nam", dob: "27/02/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_35", stt: 35, code: "2602033423", name: "Trần Thị Phương Thuỳ", gender: "Nữ", dob: "23/04/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_36", stt: 36, code: "2602033443", name: "Nguyễn Thị Yến Trang", gender: "Nữ", dob: "20/05/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_37", stt: 37, code: "2602033463", name: "Trần Thị Bích Trâm", gender: "Nữ", dob: "23/04/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_38", stt: 38, code: "2602033483", name: "Nguyễn Minh Triết", gender: "Nam", dob: "09/10/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_39", stt: 39, code: "2602033503", name: "Trần Minh Trọng", gender: "Nam", dob: "14/05/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_40", stt: 40, code: "2602033523", name: "Lê Minh Vy", gender: "Nữ", dob: "29/08/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_41", stt: 41, code: "2602033543", name: "Nguyễn Ngọc Phương Vy", gender: "Nữ", dob: "26/08/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_42", stt: 42, code: "2602033563", name: "Võ Ngọc Yến Vy", gender: "Nữ", dob: "08/08/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_43", stt: 43, code: "2602033583", name: "Nguyễn Thị Mỹ Xuyên", gender: "Nữ", dob: "24/05/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_44", stt: 44, code: "2602033603", name: "Thái Ngọc Như Ý", gender: "Nữ", dob: "06/09/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" },
  { id: "hs_laivung_45", stt: 45, code: "2602033623", name: "Bùi Thị Ngọc Yến", gender: "Nữ", dob: "30/10/2011", team: 4, role: "Học sinh", isUnionMember: false, phone: "", note: "Dân tộc Kinh" }
];

const OFFICIAL_URGENT_NOTICES = [
  {
    id: 1,
    title: "Lịch khám sức khỏe định kỳ Lớp 10B - Sáng Thứ Ba 22/09/2026",
    level: "urgent",
    sender: "Trạm Y tế xã Hòa Long & Bộ phận Y tế trường",
    content: "Căn cứ Kế hoạch số 460/KH-THPTLVg1 ngày 17/9/2026 về kiểm tra sức khỏe học sinh: Lớp 10B thực hiện khám sức khỏe vào lúc 10h30 Thứ Ba ngày 22/09/2026 tại Phòng Y tế trường. Khám toàn diện: mắt, tai mũi họng, răng hàm mặt, cơ xương khớp, đo chiều cao/cân nặng. Học sinh mặc trang phục thể dục hoặc đồng phục gọn gàng, mang theo hồ sơ sức khỏe và có mặt đúng giờ.",
    date: "17/09/2026",
    isActive: true
  },
  {
    id: 2,
    title: "Thực hiện các khoản thu năm học 2026 - 2027 & Đóng BHYT học sinh",
    level: "important",
    sender: "Ban Giám Hiệu & Bộ phận Kế toán",
    content: "Căn cứ Kế hoạch số 455/KH-THPTLVg1 ngày 15/9/2026: (1) Học phí: Miễn 100% (0 đồng) theo Nghị quyết số 217/2025/NQ-HĐND; (2) Bảo hiểm y tế: 546.480 đ/năm (hạn chót nộp 15/12/2026); (3) Sổ liên lạc điện tử vnEdu: 60.000 đ/năm; (4) Đồng phục: 60.000 đ. Nộp trực tiếp cho thầy Nguyễn Văn Tình (Bộ phận Y tế) hoặc chuyển khoản STK Agribank trường: 6510201004571 - TRUONG THPT LAI VUNG 1 (Cú pháp: [Họ tên HS] [Lớp 10B] [Khoản thu]).",
    date: "15/09/2026",
    isActive: true
  },
  {
    id: 3,
    title: "Thi đua cao điểm chào mừng 44 năm Ngày Nhà giáo Việt Nam 20/11",
    level: "important",
    sender: "Đoàn trường THPT Lai Vung 1",
    content: "Căn cứ Kế hoạch số 570/KH-THPTLVg1-ĐTN ngày 13/10/2026: Đợt thi đua cao điểm diễn ra từ 12/10/2026 đến 14/11/2026. Nội dung trọng tâm: (1) Phong trào 'Tuần học tốt - Hoa điểm 10' (+8 điểm cho mỗi điểm 10 kiểm tra); (2) Cuộc thi sáng tạo Video 'Khoảnh khắc cùng thầy cô tôi yêu' (thời lượng 3-5 phút, nộp trước 07/11/2026); (3) Hội thi 'Văn nghệ Tuổi hồng' (đăng ký tiết mục trước 17/10/2026, sơ khảo 01/11/2026, chung kết 15/11/2026).",
    date: "13/10/2026",
    isActive: true
  },
  {
    id: 4,
    title: "Kế hoạch kiểm tra, đánh giá tập trung Học kỳ I Khối 10",
    level: "important",
    sender: "Ban Chuyên Môn Trường THPT Lai Vung 1",
    content: "Căn cứ Kế hoạch số 587/KH-THPTLVg1 ngày 20/10/2026: Khối 10 kiểm tra tập trung vào BUỔI CHIỀU (tại các phòng kiểm tra niêm yết). Đợt Giữa kỳ I diễn ra từ ngày 02/11/2026 đến 04/11/2026; Đợt Cuối kỳ I diễn ra từ ngày 21/12/2026 đến 23/12/2026. Học sinh phải có mặt tại phòng kiểm tra trước giờ phát đề 20 phút, mặc đồng phục trường và đeo bảng tên đầy đủ.",
    date: "20/10/2026",
    isActive: true
  },
  {
    id: 5,
    title: "Sinh hoạt chính trị đầu năm học & Chuyên đề giáo dục Khối 10",
    level: "general",
    sender: "Chi bộ & Ban Giám Hiệu",
    content: "Căn cứ Kế hoạch số 431/KH-THPTLVg1 ngày 21/8/2026: Học sinh Khối 10 tham gia học tập truyền thống nhà trường, phổ biến nội quy học sinh, an toàn giao thông, giáo dục đạo đức lối sống, kỹ năng sống và tư vấn lựa chọn tổ hợp môn học theo Chương trình GDPT 2018.",
    date: "21/08/2026",
    isActive: false
  }
];

const OFFICIAL_EXAM_SCHEDULE = [
  // --- ĐỢT KIỂM TRA GIỮA HỌC KỲ I (02/11 - 04/11/2026, BUỔI CHIỀU) ---
  { id: 101, subject: "Ngữ văn (Giữa kỳ I)", date: "2026-11-02", format: "Tự luận", duration: "90 phút (12h55 - 14h25)", scope: "Chương trình từ tuần 1 đến tuần 8: Đọc hiểu văn bản & Viết đoạn văn nghị luận" },
  { id: 102, subject: "Vật lí / Công nghệ (Giữa kỳ I)", date: "2026-11-02", format: "Trắc nghiệm khách quan 100%", duration: "45 phút (14h50 - 15h35)", scope: "Mô tả chuyển động, vận tốc, gia tốc, lực và chuyển động" },
  { id: 103, subject: "Tin học (Giữa kỳ I)", date: "2026-11-02", format: "Trắc nghiệm kết hợp thực hành", duration: "45 phút (16h00 - 16h45)", scope: "Thông tin và xử lý thông tin, hệ thống máy tính, thuật toán căn bản" },
  { id: 104, subject: "Toán (Giữa kỳ I)", date: "2026-11-03", format: "70% Trắc nghiệm + 30% Tự luận", duration: "60 phút (12h55 - 13h55)", scope: "Mệnh đề, tập hợp, bất phương trình bậc nhất hai ẩn, hệ thức lượng trong tam giác" },
  { id: 105, subject: "GDKT&PL / Sinh học (Giữa kỳ I)", date: "2026-11-03", format: "Trắc nghiệm khách quan 100%", duration: "45 phút (14h20 - 15h05)", scope: "Nền kinh tế, thị trường, cơ chế thị trường / Khái quát thế giới sống, tế bào" },
  { id: 106, subject: "Hóa học (Giữa kỳ I)", date: "2026-11-03", format: "Trắc nghiệm khách quan 100%", duration: "45 phút (15h30 - 16h15)", scope: "Thành phần nguyên tử, nguyên tố hóa học, cấu trúc lớp vỏ electron" },
  { id: 107, subject: "Lịch sử (Giữa kỳ I)", date: "2026-11-04", format: "Trắc nghiệm khách quan 100%", duration: "45 phút (12h55 - 13h40)", scope: "Hiện thực lịch sử và nhận thức lịch sử, các nền văn minh cổ đại phương Đông" },
  { id: 108, subject: "Tiếng Anh (Giữa kỳ I)", date: "2026-11-04", format: "Trắc nghiệm + Điền từ", duration: "60 phút (14h05 - 15h05)", scope: "Từ vựng & ngữ pháp Unit 1 (Family Life), Unit 2 (Humans and Environment), Unit 3 (Music)" },
  { id: 109, subject: "Địa lí (Giữa kỳ I)", date: "2026-11-04", format: "Trắc nghiệm khách quan 100%", duration: "45 phút (15h30 - 16h15)", scope: "Sử dụng bản đồ, các quyển của vỏ Trái Đất, thạch quyển và nội lực" },

  // --- ĐỢT KIỂM TRA CUỐI HỌC KỲ I (21/12 - 23/12/2026, BUỔI CHIỀU) ---
  { id: 201, subject: "Ngữ văn (Cuối kỳ I)", date: "2026-12-21", format: "Tự luận", duration: "90 phút (12h55 - 14h25)", scope: "Toàn bộ kiến thức Học kỳ I: Thần thoại, sử thi, thơ ca, văn nghị luận xã hội" },
  { id: 202, subject: "Vật lí / Công nghệ (Cuối kỳ I)", date: "2026-12-21", format: "Trắc nghiệm khách quan", duration: "45 phút (14h50 - 15h35)", scope: "Các định luật Newton, các lực trong tự nhiên, cân bằng của vật rắn" },
  { id: 203, subject: "Tin học (Cuối kỳ I)", date: "2026-12-21", format: "Trắc nghiệm kết hợp thực hành", duration: "45 phút (16h00 - 16h45)", scope: "Lập trình cơ bản Python: Biến, kiểu dữ liệu, các cấu trúc rẽ nhánh và lặp" },
  { id: 204, subject: "Toán (Cuối kỳ I)", date: "2026-12-22", format: "70% Trắc nghiệm + 30% Tự luận", duration: "90 phút (12h55 - 14h25)", scope: "Hàm số, hàm số bậc hai, vectơ, các phép toán vectơ, tích vô hướng của hai vectơ" },
  { id: 205, subject: "GDKT&PL / Sinh học (Cuối kỳ I)", date: "2026-12-22", format: "Trắc nghiệm khách quan", duration: "45 phút (14h50 - 15h35)", scope: "Hệ thống chính trị nước CHXHCN Việt Nam / Cấu trúc tế bào nhân thực" },
  { id: 206, subject: "Hóa học (Cuối kỳ I)", date: "2026-12-22", format: "Trắc nghiệm khách quan", duration: "45 phút (16h00 - 16h45)", scope: "Bảng tuần hoàn các nguyên tố hóa học, liên kết ion, liên kết cộng hóa trị" },
  { id: 207, subject: "Lịch sử (Cuối kỳ I)", date: "2026-12-23", format: "Trắc nghiệm khách quan", duration: "45 phút (12h55 - 13h40)", scope: "Các nền văn minh phương Tây, Đông Nam Á và văn minh Văn Lang - Âu Lạc" },
  { id: 208, subject: "Tiếng Anh (Cuối kỳ I)", date: "2026-12-23", format: "Trắc nghiệm kết hợp Nghe & Viết", duration: "60 phút (14h05 - 15h05)", scope: "Ôn tập tổng hợp Unit 1 đến Unit 5 (Nghe hiểu, Đọc hiểu, Ngữ âm, Ngữ pháp, Viết)" },
  { id: 209, subject: "Địa lí (Cuối kỳ I)", date: "2026-12-23", format: "Trắc nghiệm khách quan", duration: "45 phút (15h30 - 16h15)", scope: "Khí quyển, thủy quyển, sinh quyển, thổ nhưỡng quyển và các quy luật địa lý" }
];

const OFFICIAL_MILESTONES = [
  { id: 1, title: "Khám sức khỏe học sinh Lớp 10B", date: "2026-09-22", note: "10h30 tại Phòng Y tế trường (Theo KH 460/KH-THPTLVg1)" },
  { id: 2, title: "Bắt đầu đợt thi đua cao điểm 20/11", date: "2026-10-12", note: "Phát động Hoa điểm 10 & Giữ gìn nề nếp kỷ cương (Theo KH 570)" },
  { id: 3, title: "Hạn chót đăng ký Văn nghệ Tuổi hồng", date: "2026-10-17", note: "Đăng ký tiết mục văn nghệ về Văn phòng Đoàn trường" },
  { id: 4, title: "Vòng Sơ khảo Hội thi 'Văn nghệ Tuổi hồng'", date: "2026-11-01", note: "08h00 tại Sân khấu trường THPT Lai Vung 1" },
  { id: 5, title: "Kiểm tra tập trung Giữa Học Kỳ I (Khối 10)", date: "2026-11-02", note: "Buổi chiều từ 02/11 đến 04/11/2026 (Theo KH 587/KH-THPTLVg1)" },
  { id: 6, title: "Hạn nộp video 'Khoảnh khắc cùng thầy cô tôi yêu'", date: "2026-11-07", note: "Nộp video tri ân 20/11 về Ban biên tập Đoàn trường" },
  { id: 7, title: "Chung kết Hội thi 'Văn nghệ Tuổi hồng'", date: "2026-11-15", note: "14h30 tại Sân khấu / Hội trường trường" },
  { id: 8, title: "Lễ Kỷ niệm 44 năm Ngày Nhà giáo Việt Nam", date: "2026-11-20", note: "Mít tinh toàn trường & Tuyên dương khen thưởng thi đua" },
  { id: 9, title: "Hạn chót nộp tiền BHYT học sinh năm 2026-2027", date: "2026-12-15", note: "Mức thu 546.480 đ/năm (Theo KH 455/KH-THPTLVg1)" },
  { id: 10, title: "Kiểm tra tập trung Cuối Học Kỳ I (Khối 10)", date: "2026-12-21", note: "Buổi chiều từ 21/12 đến 23/12/2026 (Theo KH 587/KH-THPTLVg1)" }
];

const OFFICIAL_RESOURCES = [
  {
    id: 1,
    title: "Kế hoạch số 431/KH-THPTLVg1: Kế hoạch Sinh hoạt chính trị đầu năm học 2026-2027",
    subject: "Chung",
    type: "reference",
    updated: "21/08/2026",
    uploader: "Hiệu trưởng - THPT Lai Vung 1",
    driveUrl: "#"
  },
  {
    id: 2,
    title: "Kế hoạch số 455/KH-THPTLVg1: Thực hiện các khoản thu năm học 2026-2027 & Thông tin nộp BHYT",
    subject: "Chung",
    type: "reference",
    updated: "15/09/2026",
    uploader: "Ban Giám Hiệu & Bộ phận Kế toán",
    driveUrl: "#"
  },
  {
    id: 3,
    title: "Kế hoạch số 460/KH-THPTLVg1: Tổ chức kiểm tra sức khỏe học sinh đầu năm học 2026-2027",
    subject: "Chung",
    type: "reference",
    updated: "17/09/2026",
    uploader: "Bộ phận Y tế trường",
    driveUrl: "#"
  },
  {
    id: 4,
    title: "Kế hoạch số 570/KH-THPTLVg1-ĐTN: Chuỗi hoạt động thi đua chào mừng 44 năm Ngày Nhà giáo Việt Nam 20/11",
    subject: "Hoạt động",
    type: "reference",
    updated: "13/10/2026",
    uploader: "Đoàn trường THPT Lai Vung 1",
    driveUrl: "#"
  },
  {
    id: 5,
    title: "Kế hoạch số 587/KH-THPTLVg1: Kế hoạch kiểm tra, đánh giá định kỳ và sơ kết Học kỳ I",
    subject: "Khảo thí",
    type: "outline",
    updated: "20/10/2026",
    uploader: "Ban Chuyên Môn",
    driveUrl: "#"
  },
  {
    id: 6,
    title: "Đề cương ôn tập & Ma trận đề kiểm tra Giữa Học kỳ I - Môn Toán Khối 10",
    subject: "Toán",
    type: "outline",
    updated: "22/10/2026",
    uploader: "Tổ Bộ Môn Toán",
    driveUrl: "#"
  },
  {
    id: 7,
    title: "Tài liệu ôn thi tập trung Giữa Học kỳ I - Môn Ngữ văn & Tiếng Anh Khối 10",
    subject: "Văn",
    type: "outline",
    updated: "24/10/2026",
    uploader: "Tổ Bộ Môn Ngữ Văn & Ngoại Ngữ",
    driveUrl: "#"
  },
  {
    id: 8,
    title: "Thể lệ cuộc thi sáng tạo video 'Khoảnh khắc cùng thầy cô tôi yêu' & Mẫu đăng ký Hội thi Tuổi hồng",
    subject: "Hoạt động",
    type: "reference",
    updated: "14/10/2026",
    uploader: "Bí Thư Đoàn Trường",
    driveUrl: "#"
  }
];

const OFFICIAL_TIMETABLE = {
  2: [
    { id: 201, session: "Chiều", period: 1, time: "12:35 - 13:20", subject: "Toán", teacher: "", room: "", note: "Đại số & Giải tích", type: "academic" },
    { id: 202, session: "Chiều", period: 2, time: "13:25 - 14:10", subject: "Toán", teacher: "", room: "", note: "Hình học & Hệ thức lượng", type: "academic" },
    { id: 203, session: "Chiều", period: 3, time: "14:30 - 15:15", subject: "Địa lí", teacher: "", room: "", note: "Bản đồ & Địa lý tự nhiên", type: "academic" },
    { id: 204, session: "Chiều", period: 4, time: "15:20 - 16:05", subject: "HĐTN HN SHC", teacher: "", room: "", note: "Sinh hoạt dưới cờ & Hướng nghiệp", type: "activity" },
    { id: 205, session: "Chiều", period: 5, time: "16:15 - 17:00", subject: "Chào Cờ", teacher: "", room: "", note: "Đồng phục áo trắng, bảng tên", type: "activity" }
  ],
  3: [
    { id: 301, session: "Chiều", period: 1, time: "12:35 - 13:20", subject: "Tiếng Anh", teacher: "", room: "", note: "Từ vựng & ngữ pháp Unit 3", type: "academic" },
    { id: 302, session: "Chiều", period: 2, time: "13:25 - 14:10", subject: "Địa lí", teacher: "", room: "", note: "Lý thuyết & Atlat Địa lý", type: "academic" },
    { id: 303, session: "Chiều", period: 3, time: "14:30 - 15:15", subject: "Toán", teacher: "", room: "", note: "Luyện tập bài tập hàm số", type: "academic" },
    { id: 304, session: "Chiều", period: 4, time: "15:20 - 16:05", subject: "Nội Dung GD Của Địa Phương", teacher: "", room: "", note: "Văn hóa & Lịch sử Đồng Tháp", type: "academic" },
    { id: 305, session: "Chiều", period: 5, time: "16:15 - 17:00", subject: "Sinh học", teacher: "", room: "", note: "Cấu trúc tế bào nhân thực", type: "academic" }
  ],
  4: [
    { id: 401, session: "Chiều", period: 1, time: "12:35 - 13:20", subject: "Công nghệ", teacher: "", room: "", note: "Công nghệ thiết kế & đời sống", type: "academic" },
    { id: 402, session: "Chiều", period: 2, time: "13:25 - 14:10", subject: "Công nghệ", teacher: "", room: "", note: "Thực hành ứng dụng", type: "academic" },
    { id: 403, session: "Chiều", period: 3, time: "14:30 - 15:15", subject: "Nội Dung GD Của Địa Phương", teacher: "", room: "", note: "Chuyên đề địa phương", type: "academic" },
    { id: 404, session: "Chiều", period: 4, time: "15:20 - 16:05", subject: "Hóa học", teacher: "", room: "", note: "Cấu tạo nguyên tử & bảng tuần hoàn", type: "academic" }
  ],
  5: [
    { id: 501, session: "Sáng", period: 2, time: "08:05 - 08:50", subject: "Giáo Dục Thể Chất (GDTC)", teacher: "", room: "", note: "Buổi Sáng • Trang phục thể thao", type: "pe" },
    { id: 502, session: "Sáng", period: 3, time: "09:10 - 09:55", subject: "Giáo Dục Thể Chất (GDTC)", teacher: "", room: "", note: "Buổi Sáng • Giày bata", type: "pe" },
    { id: 503, session: "Chiều", period: 1, time: "12:35 - 13:20", subject: "HĐTN HN", teacher: "", room: "", note: "Hoạt động trải nghiệm hướng nghiệp", type: "activity" },
    { id: 504, session: "Chiều", period: 2, time: "13:25 - 14:10", subject: "Sinh học", teacher: "", room: "", note: "Tế bào học", type: "academic" },
    { id: 505, session: "Chiều", period: 3, time: "14:30 - 15:15", subject: "Tiếng Anh", teacher: "", room: "", note: "Kỹ năng nghe & phát âm", type: "academic" },
    { id: 506, session: "Chiều", period: 4, time: "15:20 - 16:05", subject: "Lịch sử", teacher: "", room: "", note: "Lịch sử văn minh thế giới", type: "academic" },
    { id: 507, session: "Chiều", period: 5, time: "16:15 - 17:00", subject: "GDQP-AN", teacher: "", room: "", note: "Giáo dục quốc phòng an ninh", type: "pe" }
  ],
  6: [
    { id: 601, session: "Chiều", period: 1, time: "12:35 - 13:20", subject: "Hóa học", teacher: "", room: "", note: "Liên kết ion & cộng hóa trị", type: "academic" },
    { id: 602, session: "Chiều", period: 2, time: "13:25 - 14:10", subject: "Hóa học", teacher: "", room: "", note: "Bài tập liên kết hóa học", type: "academic" },
    { id: 603, session: "Chiều", period: 3, time: "14:30 - 15:15", subject: "HĐTN HN", teacher: "", room: "", note: "Xây dựng tình bạn học đường", type: "activity" },
    { id: 604, session: "Chiều", period: 4, time: "15:20 - 16:05", subject: "Sinh học", teacher: "", room: "", note: "Luyện tập tế bào học", type: "academic" },
    { id: 605, session: "Chiều", period: 5, time: "16:15 - 17:00", subject: "Sinh Hoạt Lớp (SHL)", teacher: "", room: "", note: "Sơ kết tuần, thi đua 20/11, vinh danh", type: "duty" }
  ],
  7: [
    { id: 701, session: "Chiều", period: 1, time: "12:35 - 13:20", subject: "Ngữ văn", teacher: "", room: "", note: "Đọc hiểu văn bản văn học", type: "academic" },
    { id: 702, session: "Chiều", period: 2, time: "13:25 - 14:10", subject: "Ngữ văn", teacher: "", room: "", note: "Thực hành tiếng Việt & Viết", type: "academic" },
    { id: 703, session: "Chiều", period: 3, time: "14:30 - 15:15", subject: "Tiếng Anh", teacher: "", room: "", note: "Ôn tập củng cố cuối tuần", type: "academic" }
  ]
};

const INITIAL_BLANK_DATA = {
  settings: {
    schoolName: "Trường THPT Lai Vung 1",
    className: "Lớp 10B",
    teacherName: "Nguyễn Xuân Lan",
    teacherPhone: "0938600353",
    schoolYear: "2026 - 2027",
    classSize: 45,
    driveMainUrl: "",
    zaloGroupUrl: "https://zalo.me/0938600353",
    weeklyScore: "",
    weeklyRank: "",
    darkMode: false
  },
  leadership: {
    monitor: "",          // Lớp trưởng (để trống người dùng tự bầu chọn)
    secretary: "",        // Bí thư Chi đoàn (để trống)
    viceAcademic: "",     // Lớp phó Học tập (để trống)
    viceDiscipline: "",   // Lớp phó Lao động & Nề nếp (để trống)
    viceActivity: ""      // Lớp phó Văn - Thể - Mỹ (để trống)
  },
  students: OFFICIAL_STUDENTS_LIST,
  milestones: OFFICIAL_MILESTONES,
  urgentNotices: OFFICIAL_URGENT_NOTICES,
  timetable: OFFICIAL_TIMETABLE,
  examSchedule: OFFICIAL_EXAM_SCHEDULE,
  resources: OFFICIAL_RESOURCES,
  dutyRoster: {
    currentWeek: 8,
    currentTeam: 1,
    teamLeader: "",
    tasks: [
      { id: 1, title: "Bảng đen & Phấn viết", assigned: "", role: "Lau sạch bảng sau mỗi tiết học, chuẩn bị phấn trắng & giẻ ẩm" },
      { id: 2, title: "Kê bàn ghế & Hộc bàn", assigned: "", role: "Kê ngay ngắn các dãy bàn học, nhắc nhở không để rác hộc bàn" },
      { id: 3, title: "Quét lớp & Hành lang", assigned: "", role: "Quét sạch phòng học 204 và hành lang trước cửa lớp" },
      { id: 4, title: "Góc xanh & Tưới cây", assigned: "", role: "Tưới nước ẩm cho chậu cây xanh, nhặt lá úa" },
      { id: 5, title: "Đổ rác & An toàn phòng học", assigned: "", role: "Đổ rác cuối buổi, tắt quạt/đèn/điều hòa, đóng chốt cửa" }
    ]
  },
  greenCriteria: [
    { id: "c1", text: "Bảng lớp lau sạch bóng sau mỗi tiết, bục giảng không bụi phấn, có sẵn phấn trắng và khăn lau ẩm", checked: true },
    { id: "c2", text: "Bàn ghế giáo viên và 4 dãy bàn học sinh kê thẳng hàng tăm tắp, hộc bàn 100% không có rác thải", checked: true },
    { id: "c3", text: "Sàn lớp học 204 và hành lang trước cửa lớp được quét và lau khô ráo, không đọng nước", checked: true },
    { id: "c4", text: "Thùng rác có lót bao nilong, được mang đi đổ và phân loại rác cuối mỗi buổi học đúng nơi quy định", checked: true },
    { id: "c5", text: "Chăm sóc góc cây xanh: Chậu cây được tưới đủ nước ẩm, nhặt sạch lá úa, chậu lau sạch", checked: true },
    { id: "c6", text: "Tiết kiệm điện: Tắt toàn bộ máy lạnh, quạt trần, đèn chiếu sáng khi rời khỏi phòng học", checked: true },
    { id: "c7", text: "Nề nếp kỷ cương (Kế hoạch 570): 100% học sinh mặc đúng đồng phục, đeo bảng tên, đúng giờ", checked: true }
  ],
  dutyLogs: [
    {
      date: "25/11/2026",
      writer: "Lớp phó Lao động",
      score: "10/10",
      note: "Tổ 1 trực nhật rất sạch sẽ, lau bảng sạch bóng, tưới cây đầy đủ, phòng học 204 thông thoáng."
    }
  ],
  hallOfFame: []
};

const STORAGE_KEY = 'thpt_lop10b_dashboard_v8';

// ==========================================
// STATE MANAGEMENT & LOCALSTORAGE
// ==========================================

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Đảm bảo Ban cán sự để trống nếu trước đây có dữ liệu mẫu
      if (parsed.leadership && parsed.leadership.monitor === "Nguyễn Văn An") {
        parsed.leadership = { monitor: "", secretary: "", viceAcademic: "", viceDiscipline: "", viceActivity: "" };
      }
      // Đảm bảo Bảng vinh danh để trống để người dùng tự nhập tay
      if (parsed.hallOfFame && parsed.hallOfFame.some(h => h.name === "Châu Á Anh")) {
        parsed.hallOfFame = [];
      }
      return Object.assign({}, INITIAL_BLANK_DATA, parsed, {
        settings: Object.assign({}, INITIAL_BLANK_DATA.settings, parsed.settings),
        leadership: Object.assign({}, INITIAL_BLANK_DATA.leadership, parsed.leadership),
        hallOfFame: (parsed.hallOfFame && !parsed.hallOfFame.some(h => h.name === "Châu Á Anh")) ? parsed.hallOfFame : [],
        students: (parsed.students && parsed.students.length > 0) ? parsed.students : OFFICIAL_STUDENTS_LIST,
        milestones: (parsed.milestones && parsed.milestones.length > 0) ? parsed.milestones : OFFICIAL_MILESTONES,
        urgentNotices: (parsed.urgentNotices && parsed.urgentNotices.length > 0) ? parsed.urgentNotices : OFFICIAL_URGENT_NOTICES,
        examSchedule: (parsed.examSchedule && parsed.examSchedule.length > 0) ? parsed.examSchedule : OFFICIAL_EXAM_SCHEDULE,
        resources: (parsed.resources && parsed.resources.length > 0) ? parsed.resources : OFFICIAL_RESOURCES,
        timetable: (parsed.timetable && Object.keys(parsed.timetable).some(k => parsed.timetable[k] && parsed.timetable[k].length > 0)) ? parsed.timetable : OFFICIAL_TIMETABLE
      });
    } catch (e) {
      console.error("Lỗi đọc dữ liệu:", e);
    }
  }
  return JSON.parse(JSON.stringify(INITIAL_BLANK_DATA));
}

let appState = loadState();
let currentTimetableDay = (new Date().getDay() >= 1 && new Date().getDay() <= 6) ? (new Date().getDay() + 1) : 2;
let activeTab = 'overview';
let resourceFilterSubject = 'all';
let resourceSearchQuery = '';
let studentSearchQuery = '';
let studentFilterTeam = 'all';
let studentFilterGender = 'all';

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  renderAll();
}

function resetAllData() {
  if (confirm("Bạn có chắc chắn muốn đặt lại dữ liệu về trạng thái kế hoạch và danh sách lớp 10B chính thức ban đầu?")) {
    appState = JSON.parse(JSON.stringify(INITIAL_BLANK_DATA));
    saveState();
    showToast("Đã đặt lại dữ liệu kế hoạch và danh sách Lớp 10B chuẩn THPT Lai Vung 1!", "info");
  }
}

// ==========================================
// TÍNH NĂNG 1: XUẤT / NHẬP JSON & GỬI ZALO
// ==========================================

function exportDataJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
  const downloadAnchor = document.createElement('a');
  const now = new Date();
  const dateTag = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `SaoLuu_Lop10B_${dateTag}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Đã xuất file sao lưu JSON thành công!", "success");
}

function triggerImportJSON() {
  const fileInput = document.getElementById('file-import-json');
  if (fileInput) fileInput.click();
}

function handleImportJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      if (importedData && typeof importedData === 'object') {
        appState = importedData;
        saveState();
        triggerConfetti();
        showToast("Phục hồi dữ liệu từ file sao lưu thành công!", "success");
      } else {
        showToast("File không đúng cấu trúc dữ liệu Dashboard!", "warning");
      }
    } catch (err) {
      showToast("Lỗi đọc file JSON: " + err.message, "warning");
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function copyZaloSummary() {
  const now = new Date();
  const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const dayName = days[now.getDay()];
  const dateStr = `${dayName}, ${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
  
  const jsDay = now.getDay();
  const todayNum = (jsDay >= 1 && jsDay <= 6) ? (jsDay + 1) : 2;
  const todayPeriods = (appState.timetable && appState.timetable[todayNum]) || [];
  
  let timetableText = todayPeriods.length > 0 
    ? todayPeriods.map(p => `• [${p.session || 'Chiều'}] Tiết ${p.period} (${p.time}): ${p.subject} - ${p.note || 'Bình thường'}`).join('\n')
    : "• Hôm nay không có lịch tiết học theo TKB Tuần 12";

  let dutyTeam = `Tổ ${appState.dutyRoster.currentTeam} (Tổ trưởng: ${appState.dutyRoster.teamLeader || 'Chưa phân công'})`;

  let urgentMsg = "";
  const activeNotice = (appState.urgentNotices || []).find(n => n.isActive && n.level === 'urgent');
  if (activeNotice) {
    urgentMsg = `\n⚡ THÔNG BÁO KHẨN: ${activeNotice.title}\n${activeNotice.content}\n`;
  }

  const text = `📢 [BẢN TIN LỚP 10B - TRƯỜNG THPT LAI VUNG 1]
📅 Ngày: ${dateStr}
GVCN: Cô Nguyễn Xuân Lan (0938.600.353) | Sĩ số: 45 học sinh
🌿 Khẩu hiệu: TỰ TIN - BẢN LĨNH - BỨT PHÁ - THÀNH CÔNG
${urgentMsg}
📅 THỜI KHÓA BIỂU HÔM NAY (TUẦN 12):
${timetableText}

🧹 TRỰC NHẬT HÔM NAY:
• Phụ trách: ${dutyTeam}

🔗 Thư mục Google Drive học liệu lớp:
${appState.settings.driveMainUrl || '(GVCN chưa cập nhật link)'}

Chúc các bạn Lớp 10B một buổi học hứng khởi, giữ vững nề nếp và gặt hái nhiều hoa điểm mười!`;

  navigator.clipboard.writeText(text).then(() => {
    showToast("Đã sao chép nội dung tóm tắt để gửi vào Zalo Lớp 10B!", "success");
  }).catch(() => {
    showToast("Không thể tự động sao chép, vui lòng thử lại!", "warning");
  });
}

// ==========================================
// TÍNH NĂNG 2: CHẾ ĐỘ TỐI (DARK MODE)
// ==========================================

function toggleDarkMode() {
  appState.settings.darkMode = !appState.settings.darkMode;
  applyDarkModeUI();
  saveState();
  showToast(appState.settings.darkMode ? "Đã bật Giao diện Tối (Dark Mode)" : "Đã bật Giao diện Sáng", "info");
}

function applyDarkModeUI() {
  const isDark = appState.settings.darkMode;
  const btn = document.getElementById('btn-dark-mode-toggle');
  
  if (isDark) {
    document.body.classList.add('dark-mode');
    if (btn) btn.innerHTML = `<span>☀️</span>`;
  } else {
    document.body.classList.remove('dark-mode');
    if (btn) btn.innerHTML = `<span>🌙</span>`;
  }
}

// ==========================================
// TÍNH NĂNG 3: NHẬN DIỆN TIẾT HỌC ĐANG DIỄN RA
// ==========================================

function getActivePeriodInfo() {
  const now = new Date();
  const jsDay = now.getDay(); // 0: CN, 1: T2, 2: T3, 3: T4, 4: T5, 5: T6, 6: T7
  if (jsDay < 1 || jsDay > 6) return { dayNumber: 0, session: null, period: 0 };

  const dayNumber = jsDay + 1; // 2 -> Thứ 2, ..., 7 -> Thứ 7
  const minutes = now.getHours() * 60 + now.getMinutes();

  // Sáng Thứ 5 (dayNumber === 5): Giáo Dục Thể Chất
  if (dayNumber === 5) {
    if (minutes >= 485 && minutes <= 530) return { dayNumber, session: 'Sáng', period: 2 }; // 08:05 - 08:50
    if (minutes >= 550 && minutes <= 595) return { dayNumber, session: 'Sáng', period: 3 }; // 09:10 - 09:55
  }

  // Buổi Chiều (các ngày trong tuần từ Thứ 2 đến Thứ 7):
  if (minutes >= 755 && minutes <= 800) return { dayNumber, session: 'Chiều', period: 1 }; // 12:35 - 13:20
  if (minutes >= 805 && minutes <= 850) return { dayNumber, session: 'Chiều', period: 2 }; // 13:25 - 14:10
  if (minutes >= 870 && minutes <= 915) return { dayNumber, session: 'Chiều', period: 3 }; // 14:30 - 15:15
  if (minutes >= 920 && minutes <= 965) return { dayNumber, session: 'Chiều', period: 4 }; // 15:20 - 16:05
  if (minutes >= 975 && minutes <= 1020) return { dayNumber, session: 'Chiều', period: 5 }; // 16:15 - 17:00

  return { dayNumber, session: null, period: 0 };
}

function getActivePeriodNumber() {
  const info = getActivePeriodInfo();
  return info.period;
}

// Đồng hồ
function startClock() {
  const clockEl = document.getElementById('realtime-clock');
  const dateEl = document.getElementById('realtime-date');
  
  function update() {
    const now = new Date();
    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dayName = days[now.getDay()];
    const dateStr = `${dayName}, ${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    if (clockEl) clockEl.textContent = timeStr;
    if (dateEl) dateEl.textContent = dateStr;
  }
  
  update();
  setInterval(update, 1000);
}

// Tabs
function switchTab(tabId) {
  activeTab = tabId;
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'shadow-blue-500/20');
      btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
    } else {
      btn.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'shadow-blue-500/20');
      btn.classList.add('text-slate-600', 'hover:bg-slate-100');
    }
  });

  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.remove('active');
  });

  if (tabId === 'overview') {
    document.querySelectorAll('.tab-content').forEach(s => s.classList.add('active'));
  } else {
    const targetSection = document.getElementById(`section-${tabId}`);
    if (targetSection) {
      targetSection.classList.add('active');
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  if (window.lucide) lucide.createIcons();
}

// ==========================================
// RENDER CÁC PHÂN HỆ
// ==========================================

// 1. Header & Cài đặt chung
function renderHeaderAndStats() {
  const s = appState.settings || {};
  const totalStudents = (appState.students && appState.students.length > 0) ? appState.students.length : (parseInt(s.classSize) || 0);
  
  document.querySelectorAll('.bind-school-name').forEach(el => el.textContent = s.schoolName || "Trường THPT");
  document.querySelectorAll('.bind-class-name').forEach(el => el.textContent = s.className || "Lớp 10B");
  document.querySelectorAll('.bind-teacher-name').forEach(el => el.textContent = s.teacherName ? s.teacherName : "Chưa nhập tên GVCN");
  document.querySelectorAll('.bind-class-size').forEach(el => el.textContent = totalStudents > 0 ? `${totalStudents} học sinh` : "Chưa có danh sách");
  document.querySelectorAll('.bind-school-year').forEach(el => el.textContent = s.schoolYear || "2026 - 2027");
  document.querySelectorAll('.bind-weekly-score').forEach(el => el.textContent = s.weeklyScore || "---");
  document.querySelectorAll('.bind-weekly-rank').forEach(el => el.textContent = s.weeklyRank || "Chưa nhập xếp hạng");
  document.querySelectorAll('.bind-current-duty-team').forEach(el => el.textContent = `Tổ ${appState.dutyRoster.currentTeam}`);

  const masterDriveBtn = document.getElementById('btn-master-drive');
  if (masterDriveBtn) {
    if (s.driveMainUrl) {
      masterDriveBtn.href = s.driveMainUrl;
      masterDriveBtn.onclick = null;
      masterDriveBtn.classList.remove('opacity-60');
    } else {
      masterDriveBtn.href = "#";
      masterDriveBtn.classList.add('opacity-60');
      masterDriveBtn.onclick = (e) => {
        e.preventDefault();
        openClassSettingsModal();
        showToast("Vui lòng dán link Google Drive chung của lớp vào phần Cài đặt!", "info");
      };
    }
  }

  const zaloGroupBtn = document.getElementById('btn-zalo-group');
  if (zaloGroupBtn) {
    if (s.zaloGroupUrl) {
      zaloGroupBtn.href = s.zaloGroupUrl;
      zaloGroupBtn.onclick = null;
    } else {
      zaloGroupBtn.href = "#";
      zaloGroupBtn.onclick = (e) => {
        e.preventDefault();
        openClassSettingsModal();
        showToast("Vui lòng nhập đường link nhóm Zalo lớp 10B trong phần Cài đặt!", "info");
      };
    }
  }
}

// 2. Thông báo khẩn của Ban Giám Hiệu
function renderUrgentNotices() {
  const bannerContainer = document.getElementById('urgent-alert-banner-container');
  const noticesListContainer = document.getElementById('urgent-notices-container');
  
  const notices = appState.urgentNotices || [];
  const activeUrgentNotice = notices.find(n => n.isActive && n.level === 'urgent');

  if (bannerContainer) {
    if (activeUrgentNotice) {
      bannerContainer.innerHTML = `
        <div class="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 text-white p-4 rounded-3xl shadow-lg shadow-rose-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-pulse border border-white/20">
          <div class="flex items-center gap-3.5">
            <span class="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center font-black text-2xl shrink-0 shadow-inner">
              ⚡
            </span>
            <div>
              <div class="flex items-center gap-2 mb-0.5">
                <span class="font-black uppercase tracking-wider text-[10px] bg-white text-rose-600 px-2.5 py-0.5 rounded-full shadow-sm">THÔNG BÁO KHẨN TỪ NHÀ TRƯỜNG</span>
                <span class="text-xs text-rose-100 font-semibold">${activeUrgentNotice.date} • ${activeUrgentNotice.sender}</span>
              </div>
              <h4 class="text-sm sm:text-base font-black text-white tracking-wide">${activeUrgentNotice.title}</h4>
              <p class="text-xs text-rose-100 mt-1 leading-relaxed">${activeUrgentNotice.content}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button onclick="toggleNoticeStatus(${activeUrgentNotice.id})" class="px-3.5 py-2 bg-white/20 hover:bg-white hover:text-rose-600 text-white rounded-xl text-xs font-bold transition-all shadow-sm">
              Tạm ẩn banner
            </button>
          </div>
        </div>
      `;
      bannerContainer.classList.remove('hidden');
    } else {
      bannerContainer.innerHTML = '';
      bannerContainer.classList.add('hidden');
    }
  }

  if (noticesListContainer) {
    if (notices.length === 0) {
      noticesListContainer.innerHTML = `
        <div class="py-8 px-4 text-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
          <div class="w-10 h-10 mx-auto rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl font-bold mb-2 border border-rose-200">
            🔔
          </div>
          <p class="text-xs font-bold text-slate-700">Chưa có thông báo nào từ Ban Giám Hiệu & Nhà trường.</p>
          <p class="text-[11px] text-slate-400 mt-0.5">Khi có thông báo khẩn cấp, giáo viên nhấn nút bên dưới để phát sóng.</p>
          <button onclick="openModal('modal-add-notice')" class="mt-3 px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-all">
            + Phát Thông Báo Mới
          </button>
        </div>
      `;
      return;
    }

    noticesListContainer.innerHTML = notices.map(notice => {
      const isUrgent = notice.level === 'urgent';
      const isImportant = notice.level === 'important';
      const badgeColor = isUrgent ? 'bg-rose-100 text-rose-700 border-rose-200' : (isImportant ? 'bg-amber-100 text-amber-800 border-amber-200' : 'bg-blue-100 text-blue-700 border-blue-200');
      const badgeText = isUrgent ? 'KHẨN CẤP' : (isImportant ? 'QUAN TRỌNG' : 'TIN NHÀ TRƯỜNG');
      const borderColor = isUrgent ? 'border-l-4 border-l-rose-500' : (isImportant ? 'border-l-4 border-l-amber-500' : 'border-l-4 border-l-blue-500');

      return `
        <div class="p-4 rounded-2xl border border-slate-200 bg-white ${borderColor} shadow-sm relative group">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <div class="flex items-center gap-2">
              <span class="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${badgeColor}">
                ${badgeText}
              </span>
              ${notice.isActive ? `<span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">● Đang phát</span>` : `<span class="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Đã ẩn</span>`}
            </div>
            <span class="text-xs text-slate-400 font-semibold">📅 ${notice.date} • ${notice.sender}</span>
          </div>
          <h4 class="font-extrabold text-slate-900 text-sm sm:text-base">${notice.title}</h4>
          <p class="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">${notice.content}</p>
          <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-end gap-3 text-xs">
            <button onclick="toggleNoticeStatus(${notice.id})" class="text-blue-600 hover:underline font-bold">
              ${notice.isActive ? 'Tạm ẩn thông báo' : 'Bật phát sóng'}
            </button>
            <span class="text-slate-300">•</span>
            <button onclick="deleteNotice(${notice.id})" class="text-rose-600 hover:underline font-bold">
              Xóa 🗑️
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

// 3. Thời khóa biểu số THPT + Nhận diện Tiết học đang diễn ra
function renderTimetable(dayNumber) {
  currentTimetableDay = dayNumber;
  const container = document.getElementById('timetable-list');
  const dayButtons = document.querySelectorAll('.day-btn');
  
  dayButtons.forEach(btn => {
    if (parseInt(btn.dataset.day) === dayNumber) {
      btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');
    } else {
      btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600', 'shadow-sm');
      btn.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
    }
  });

  const periods = (appState.timetable && appState.timetable[dayNumber]) || [];

  if (periods.length === 0) {
    container.innerHTML = `
      <div class="py-12 px-6 text-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/60">
        <div class="w-12 h-12 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold mb-3 border border-blue-200">
          📅
        </div>
        <h4 class="font-extrabold text-slate-800 text-sm">Chưa có tiết học nào cho Thứ ${dayNumber}</h4>
        <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">Hôm nay lớp không có lịch học theo thời khóa biểu Tuần 12.</p>
        <button onclick="openAddPeriodModal(${dayNumber})" class="mt-4 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all">
          + Nhập Tiết Học Cho Thứ ${dayNumber}
        </button>
      </div>
    `;
    return;
  }

  const badges = {
    academic: { bg: 'bg-blue-50 text-blue-700 border-blue-200' },
    lab: { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    exam: { bg: 'bg-rose-50 text-rose-700 border-rose-200 font-bold' },
    pe: { bg: 'bg-amber-50 text-amber-700 border-amber-200' },
    activity: { bg: 'bg-purple-50 text-purple-700 border-purple-200' },
    duty: { bg: 'bg-teal-50 text-teal-700 border-teal-200' }
  };

  const activeInfo = getActivePeriodInfo();

  container.innerHTML = periods.map(p => {
    const meta = badges[p.type] || badges.academic;
    const isNow = (dayNumber === activeInfo.dayNumber && p.period === activeInfo.period && (p.session || 'Chiều') === activeInfo.session);
    const sessionBadge = p.session === 'Sáng' 
      ? '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">☀️ Buổi Sáng</span>' 
      : '<span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-300">🌤️ Buổi Chiều</span>';

    return `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border ${isNow ? 'active-period-card' : 'border-slate-200/80 bg-white hover:border-blue-300'} hover:shadow-sm transition-all gap-3 relative group">
        <div class="flex items-start sm:items-center gap-3.5">
          <div class="w-10 h-10 rounded-xl ${isNow ? 'bg-emerald-600 text-white font-black' : (p.session === 'Sáng' ? 'bg-amber-500 text-white font-black' : 'bg-slate-100 text-slate-800 font-extrabold')} flex items-center justify-center text-sm shrink-0 border border-slate-200 shadow-sm">
            T${p.period}
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="font-black text-slate-900 text-sm sm:text-base">${p.subject}</h4>
              ${sessionBadge}
              ${isNow ? `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300 animate-pulse">● ĐANG HỌC</span>` : ''}
            </div>
            <p class="text-xs text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
              <span>⏰ ${p.time}</span>
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between sm:justify-end gap-3">
          <span class="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-xl bg-slate-50 text-slate-600 border border-slate-200">
            📌 ${p.note || 'Học bình thường'}
          </span>
          <button onclick="deletePeriod(${dayNumber}, ${p.id})" class="text-rose-500 hover:text-rose-700 p-1.5 rounded-xl hover:bg-rose-50 text-xs font-bold transition-colors" title="Xóa tiết học này">
            🗑️
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openPosterModal() {
  openModal('modal-view-poster');
}

// 4. Lịch kiểm tra định kỳ THPT
function renderExamSchedule() {
  const container = document.getElementById('exam-schedule-list');
  if (!container) return;

  const exams = appState.examSchedule || [];
  if (exams.length === 0) {
    container.innerHTML = `
      <div class="py-8 px-4 text-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
        <div class="w-10 h-10 mx-auto rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-bold mb-2 border border-amber-200">
          ⏱️
        </div>
        <p class="text-xs font-bold text-slate-700">Chưa có lịch kiểm tra định kỳ nào.</p>
        <p class="text-[11px] text-slate-400 mt-0.5">Giáo viên bấm nút bên dưới để lên lịch kiểm tra 15p, 1 tiết hoặc giữa kỳ.</p>
        <button onclick="openModal('modal-add-exam')" class="mt-3 px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-all">
          + Lên Lịch Kiểm Tra
        </button>
      </div>
    `;
    return;
  }

  const now = new Date();
  container.innerHTML = exams.map(exam => {
    const examDate = new Date(exam.date);
    const diffTime = examDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    let countdownBadge = '';
    if (diffDays < 0) {
      countdownBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-500">Đã thi xong</span>`;
    } else if (diffDays === 0) {
      countdownBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-100 text-rose-700 animate-pulse">HÔM NAY THI!</span>`;
    } else if (diffDays <= 3) {
      countdownBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-100 text-rose-700">Còn ${diffDays} ngày nữa!</span>`;
    } else {
      countdownBadge = `<span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">Còn ${diffDays} ngày</span>`;
    }

    return `
      <div class="p-4 rounded-2xl border border-slate-200 bg-white hover:border-amber-300 hover:shadow-sm transition-all relative">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs border border-amber-200">
              📝
            </span>
            <h4 class="font-black text-slate-900">${exam.subject}</h4>
          </div>
          ${countdownBadge}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 mt-2 font-medium">
          <p><strong class="text-slate-700">Ngày thi:</strong> ${exam.date.split('-').reverse().join('/')} (${exam.duration})</p>
          <p><strong class="text-slate-700">Hình thức:</strong> ${exam.format}</p>
        </div>
        <div class="mt-2.5 pt-2 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
          <span><span class="text-slate-700 font-bold">Trọng tâm ôn:</span> ${exam.scope || 'Theo đề cương ôn thi'}</span>
          <button onclick="deleteExam(${exam.id})" class="text-rose-500 hover:text-rose-700 font-bold ml-2 shrink-0">Xóa 🗑️</button>
        </div>
      </div>
    `;
  }).join('');
}

// 5. Kho tài nguyên Google Drive
function renderResources() {
  const container = document.getElementById('resources-list');
  if (!container) return;

  let filtered = appState.resources || [];

  if (resourceFilterSubject !== 'all') {
    filtered = filtered.filter(item => item.subject.toLowerCase() === resourceFilterSubject.toLowerCase());
  }

  if (resourceSearchQuery.trim()) {
    const q = resourceSearchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.subject.toLowerCase().includes(q) || 
      item.uploader.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-14 px-6 text-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/60">
        <div class="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl font-bold mb-3 border border-blue-200">
          📂
        </div>
        <h4 class="font-extrabold text-slate-800 text-base">Kho tài nguyên học tập đang để trống</h4>
        <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">Giáo viên có thể thêm bài giảng slide, file PDF tài liệu tham khảo và đề cương ôn tập môn học.</p>
        <button onclick="openModal('modal-add-resource')" class="mt-4 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all">
          + Thêm Tài Liệu Mới
        </button>
      </div>
    `;
    return;
  }

  const typeConfig = {
    slide: { name: "Bài giảng Slide", color: "text-amber-600 bg-amber-50 border-amber-200" },
    outline: { name: "Đề cương ôn thi", color: "text-blue-600 bg-blue-50 border-blue-200" },
    mock_test: { name: "Đề thi thử & Bài tập", color: "text-purple-600 bg-purple-50 border-purple-200" },
    reference: { name: "Tài liệu tham khảo", color: "text-emerald-600 bg-emerald-50 border-emerald-200" }
  };

  container.innerHTML = filtered.map(item => {
    const typeInfo = typeConfig[item.type] || typeConfig.reference;
    return `
      <div class="p-5 rounded-3xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full border ${typeInfo.color}">
              ${typeInfo.name}
            </span>
            <span class="text-[11px] font-semibold text-slate-400">
              ${item.updated}
            </span>
          </div>
          <h4 class="font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm sm:text-base mb-2">
            ${item.title}
          </h4>
          <p class="text-xs text-slate-500 font-medium mb-4 flex items-center gap-1.5">
            <span>🏷️ Môn: <strong class="text-slate-700">${item.subject}</strong></span>
            <span>•</span>
            <span>👤 ${item.uploader || 'Giáo viên bộ môn'}</span>
          </p>
        </div>
        <div class="pt-3 border-t border-slate-100 flex items-center gap-2">
          <a href="${item.driveUrl}" target="_blank" rel="noopener noreferrer" 
             class="flex-1 text-center py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5">
            <span>🔗</span> Mở trên Drive
          </a>
          <button onclick="copyLink('${item.driveUrl}')" title="Sao chép link Google Drive"
                  class="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs transition-colors">
            📋
          </button>
          <button onclick="deleteResource(${item.id})" title="Xóa tài liệu này" class="p-2 rounded-xl border border-rose-200 hover:bg-rose-50 text-rose-600 text-xs">
            🗑️
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// 6. Lịch trực nhật 4 Tổ THPT
function renderDutyTasks() {
  const container = document.getElementById('duty-tasks-container');
  const roster = appState.dutyRoster;
  if (!container) return;

  const currentDutyTeamEl = document.getElementById('display-duty-team');
  const dutyTeamLeaderEl = document.getElementById('display-duty-leader');
  if (currentDutyTeamEl) currentDutyTeamEl.textContent = `Tổ ${roster.currentTeam} (Tuần ${roster.currentWeek})`;
  if (dutyTeamLeaderEl) dutyTeamLeaderEl.textContent = roster.teamLeader ? roster.teamLeader : "Chưa nhập";

  container.innerHTML = roster.tasks.map(t => `
    <div class="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all">
      <div class="flex items-center justify-between gap-2 mb-1">
        <h5 class="font-extrabold text-slate-800 text-xs sm:text-sm">🧹 ${t.title}</h5>
        <span class="text-xs font-bold px-2.5 py-0.5 rounded-lg ${t.assigned ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-400'}">
          ${t.assigned || 'Chưa phân công'}
        </span>
      </div>
      <p class="text-xs text-slate-500 font-medium">${t.role}</p>
    </div>
  `).join('');
}

function renderGreenChecklist() {
  const container = document.getElementById('green-criteria-list');
  const progressText = document.getElementById('criteria-progress-text');
  const progressBar = document.getElementById('criteria-progress-bar');
  if (!container) return;

  const list = appState.greenCriteria || [];
  const total = list.length;
  const completed = list.filter(c => c.checked).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  if (progressText) progressText.textContent = `${completed}/${total} tiêu chí hoàn thành (${percent}%)`;
  if (progressBar) progressBar.style.width = `${percent}%`;

  container.innerHTML = list.map(c => `
    <label class="flex items-start gap-3 p-3 rounded-2xl border ${c.checked ? 'border-emerald-200 bg-emerald-50/50' : 'border-slate-200 bg-white'} cursor-pointer hover:border-emerald-300 transition-all select-none">
      <input type="checkbox" onchange="toggleCriterion('${c.id}')" ${c.checked ? 'checked' : ''} 
             class="mt-0.5 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500">
      <span class="text-xs sm:text-sm ${c.checked ? 'text-slate-800 font-bold' : 'text-slate-600'} leading-relaxed">
        ${c.text}
      </span>
    </label>
  `).join('');
}

function toggleCriterion(id) {
  appState.greenCriteria = appState.greenCriteria.map(c => {
    if (c.id === id) return { ...c, checked: !c.checked };
    return c;
  });
  saveState();

  const allCompleted = appState.greenCriteria.every(c => c.checked);
  if (allCompleted) {
    triggerConfetti();
    showToast("Tuyệt vời! Lớp 10B hôm nay đạt chuẩn Xanh - Sạch - Đẹp 100%!", "success");
  }
}

function renderDutyLogs() {
  const container = document.getElementById('duty-logs-history');
  if (!container) return;

  const logs = appState.dutyLogs || [];
  if (logs.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400 font-medium">Chưa có nhật ký trực nhật nào được lưu.</p>`;
    return;
  }

  container.innerHTML = logs.map(log => `
    <div class="p-3 rounded-2xl border border-slate-200 bg-slate-50 text-xs">
      <div class="flex items-center justify-between font-bold text-slate-800 mb-1">
        <span>📅 ${log.date} • ${log.writer}</span>
        <span class="px-2 py-0.5 rounded-lg bg-blue-100 text-blue-700 font-extrabold">${log.score}</span>
      </div>
      <p class="text-slate-600">${log.note}</p>
    </div>
  `).join('');
}

// 7. Bảng vinh danh gương sáng tuần
function renderHallOfFame() {
  const container = document.getElementById('hall-of-fame-grid');
  if (!container) return;

  const list = appState.hallOfFame || [];
  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-14 px-6 text-center border-2 border-dashed border-amber-200 rounded-3xl bg-amber-50/40">
        <div class="w-14 h-14 mx-auto rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-3xl font-bold mb-3 border border-amber-300 shadow-sm">
          ⭐
        </div>
        <h4 class="font-extrabold text-slate-800 text-base">Bảng vinh danh đang để trống</h4>
        <p class="text-xs text-slate-500 mt-1 max-w-md mx-auto">Danh sách tuyên dương được tự tay người dùng (thầy cô hoặc ban cán sự lớp) bình xét và thêm vào sau các tiết Sinh hoạt lớp cuối tuần.</p>
        <button onclick="openModal('modal-nominate')" class="mt-4 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs shadow-md shadow-amber-500/20 transition-all inline-flex items-center gap-1.5">
          <span>🌟</span> + Tự Tay Thêm Gương Sáng Vinh Danh
        </button>
      </div>
    `;
    return;
  }

  const categoryStyles = {
    academic: { border: "border-amber-300 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30", badge: "bg-amber-100 text-amber-900 border-amber-300" },
    improvement: { border: "border-blue-300 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30", badge: "bg-blue-100 text-blue-900 border-blue-300" },
    kindness: { border: "border-rose-300 bg-gradient-to-br from-rose-50/80 via-white to-rose-50/30", badge: "bg-rose-100 text-rose-900 border-rose-300" },
    group: { border: "border-purple-300 bg-gradient-to-br from-purple-50/80 via-white to-purple-50/30", badge: "bg-purple-100 text-purple-900 border-purple-300" }
  };

  container.innerHTML = list.map(item => {
    const style = categoryStyles[item.category] || categoryStyles.academic;
    return `
      <div class="relative p-6 rounded-3xl border-2 ${style.border} shadow-lg shadow-slate-200/50 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
        <div class="absolute -top-3.5 right-6">
          <span class="text-xs font-black px-3 py-1 rounded-full border shadow-sm ${style.badge}">
            ${item.badge}
          </span>
        </div>
        <div>
          <div class="flex items-center gap-3.5 mb-4">
            <div class="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-3xl shrink-0">
              ${item.avatar || '🌟'}
            </div>
            <div>
              <h4 class="font-black text-slate-900 text-base sm:text-lg">${item.name}</h4>
              <p class="text-xs font-bold text-amber-700">${item.title}</p>
            </div>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 mb-4">
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium">
              "${item.achievement}"
            </p>
          </div>
        </div>
        <div class="pt-3 border-t border-slate-200/60 flex items-center justify-between">
          <span class="text-xs font-bold text-slate-400">📅 ${item.date || 'Tuần này'}</span>
          <div class="flex items-center gap-2">
            <button onclick="cheerMember(${item.id})" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 hover:border-rose-400 font-bold text-xs transition-all shadow-sm active:scale-95">
              <span>❤️ Chúc mừng</span>
              <span class="px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-700 text-[11px] font-black">${item.hearts || 0}</span>
            </button>
            <button onclick="deleteHallOfFame(${item.id})" class="text-rose-500 hover:text-rose-700 text-xs font-bold p-1" title="Xóa vinh danh">🗑️</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 8. Ban Cán Sự Lớp & Sơ Đồ Chỗ Ngồi 4 Dãy Bàn
function renderLeadership() {
  const lead = appState.leadership || {};
  const leadContainer = document.getElementById('leadership-container');
  if (!leadContainer) return;

  const roles = [
    { title: "Lớp Trưởng", name: lead.monitor, icon: "👑", color: "border-amber-200 bg-amber-50 text-amber-900" },
    { title: "Bí Thư Chi Đoàn", name: lead.secretary, icon: "🚩", color: "border-rose-200 bg-rose-50 text-rose-900" },
    { title: "Lớp Phó Học Tập", name: lead.viceAcademic, icon: "📖", color: "border-blue-200 bg-blue-50 text-blue-900" },
    { title: "Lớp Phó Lao Động", name: lead.viceDiscipline, icon: "🧹", color: "border-emerald-200 bg-emerald-50 text-emerald-900" },
    { title: "Lớp Phó Văn-Thể-Mỹ", name: lead.viceActivity, icon: "🎨", color: "border-purple-200 bg-purple-50 text-purple-900" }
  ];

  leadContainer.innerHTML = roles.map(r => `
    <div class="p-4 rounded-3xl border ${r.color} flex items-center justify-between shadow-sm">
      <div class="flex items-center gap-3">
        <span class="text-2xl">${r.icon}</span>
        <div>
          <span class="text-[11px] font-extrabold uppercase tracking-wider block opacity-75">${r.title}</span>
          <h5 class="font-black text-sm sm:text-base">${r.name || 'Chưa bầu chọn'}</h5>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 8. DANH SÁCH HỌC SINH LỚP 10B
// ==========================================

function renderStudentList() {
  const container = document.getElementById('student-table-container');
  if (!container) return;

  const students = appState.students || [];

  // Tính toán số liệu thống kê
  const total = students.length;
  const maleCount = students.filter(s => s.gender === 'Nam').length;
  const femaleCount = students.filter(s => s.gender === 'Nữ').length;
  const unionCount = students.filter(s => s.isUnionMember).length;

  const malePercent = total > 0 ? Math.round((maleCount / total) * 100) : 0;
  const femalePercent = total > 0 ? Math.round((femaleCount / total) * 100) : 0;

  // Cập nhật các badge thống kê
  const statTotal = document.getElementById('stat-total-students');
  const statMale = document.getElementById('stat-male-students');
  const statFemale = document.getElementById('stat-female-students');
  const statUnion = document.getElementById('stat-union-students');
  const statMalePct = document.getElementById('stat-male-percent');
  const statFemalePct = document.getElementById('stat-female-percent');

  if (statTotal) statTotal.textContent = total;
  if (statMale) statMale.textContent = maleCount;
  if (statFemale) statFemale.textContent = femaleCount;
  if (statUnion) statUnion.textContent = unionCount;
  if (statMalePct) statMalePct.textContent = `(${malePercent}%)`;
  if (statFemalePct) statFemalePct.textContent = `(${femalePercent}%)`;

  // Lọc theo tìm kiếm, tổ và giới tính
  let filtered = students.slice();

  if (studentFilterTeam !== 'all') {
    filtered = filtered.filter(s => String(s.team) === String(studentFilterTeam));
  }

  if (studentFilterGender !== 'all') {
    filtered = filtered.filter(s => s.gender === studentFilterGender);
  }

  if (studentSearchQuery) {
    const q = studentSearchQuery.toLowerCase();
    filtered = filtered.filter(s => 
      (s.name && s.name.toLowerCase().includes(q)) ||
      (s.code && s.code.toLowerCase().includes(q)) ||
      (s.phone && s.phone.includes(q)) ||
      (s.role && s.role.toLowerCase().includes(q)) ||
      (s.note && s.note.toLowerCase().includes(q))
    );
  }

  // Sắp xếp theo STT tăng dần
  filtered.sort((a, b) => (Number(a.stt) || 999) - (Number(b.stt) || 999));

  if (students.length === 0) {
    container.innerHTML = `
      <div class="p-12 text-center space-y-4">
        <div class="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-3xl border border-blue-100 shadow-sm">
          👥
        </div>
        <div>
          <h4 class="font-black text-slate-800 text-base">Chưa có học sinh nào trong danh sách Lớp 10B</h4>
          <p class="text-xs text-slate-500 max-w-md mx-auto mt-1">
            Hiện tại chưa có dữ liệu học sinh. Thầy/Cô vui lòng nhấn nút <strong>"+ Thêm Học Sinh"</strong> để nhập từng em hoặc bấm <strong>"Nạp Danh Sách 45 HS (THPT Lai Vung 1)"</strong> bên dưới để nạp danh sách lớp.
          </p>
        </div>
        <div class="flex items-center justify-center gap-3 pt-2">
          <button onclick="openAddStudentModal()" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5">
            <span>➕</span> + Thêm Học Sinh Mới
          </button>
          <button onclick="populateSampleStudents()" class="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-extrabold text-xs rounded-xl border border-indigo-200 transition-all flex items-center gap-1.5">
            <span>⚡</span> Nạp Danh Sách 45 HS (THPT Lai Vung 1)
          </button>
        </div>
      </div>
    `;
    return;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center space-y-2">
        <span class="text-2xl">🔍</span>
        <h4 class="font-bold text-slate-700 text-sm">Không tìm thấy học sinh nào phù hợp</h4>
        <p class="text-xs text-slate-400">Thử thay đổi từ khóa tìm kiếm hoặc bỏ chọn các bộ lọc Tổ / Giới tính.</p>
        <button onclick="resetStudentFilters()" class="text-xs text-blue-600 font-bold hover:underline pt-1">
          Xóa toàn bộ bộ lọc
        </button>
      </div>
    `;
    return;
  }

  let tableHtml = `
    <table class="student-table">
      <thead>
        <tr>
          <th class="text-center w-12">STT</th>
          <th class="w-24">Mã HS</th>
          <th>Họ và Tên</th>
          <th class="text-center w-20">Giới tính</th>
          <th class="text-center w-28">Ngày sinh</th>
          <th class="text-center w-20">Tổ</th>
          <th>Chức vụ / Đoàn thể</th>
          <th class="w-36">SĐT Phụ Huynh</th>
          <th>Ghi chú</th>
          <th class="text-center w-24">Thao tác</th>
        </tr>
      </thead>
      <tbody>
  `;

  filtered.forEach(s => {
    const genderClass = s.gender === 'Nữ' ? 'gender-badge-nu' : 'gender-badge-nam';
    const teamClass = `team-badge-${s.team || 1}`;
    const unionBadge = s.isUnionMember ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-50 text-red-700 font-bold text-[10px] border border-red-200" title="Đoàn viên TNCS Hồ Chí Minh">🇻🇳 Đoàn viên</span>` : '';
    const roleBadge = (s.role && s.role !== 'Học sinh') ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-extrabold text-[10px] border border-blue-200">${s.role}</span>` : `<span class="text-slate-400 text-xs">Học sinh</span>`;
    
    tableHtml += `
      <tr class="student-row">
        <td class="text-center font-black text-slate-500">${s.stt || '-'}</td>
        <td class="font-mono font-bold text-xs text-slate-600">${s.code || '-'}</td>
        <td>
          <div class="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
            <span>${s.name}</span>
            ${s.isUnionMember ? '<span class="text-[10px]" title="Đoàn viên">🇻🇳</span>' : ''}
          </div>
        </td>
        <td class="text-center">
          <span class="inline-block px-2 py-0.5 rounded-md font-bold text-[11px] ${genderClass}">
            ${s.gender === 'Nữ' ? '👧 Nữ' : '👦 Nam'}
          </span>
        </td>
        <td class="text-center text-slate-600 font-medium">${s.dob || '-'}</td>
        <td class="text-center">
          <span class="team-badge ${teamClass}">Tổ ${s.team || 1}</span>
        </td>
        <td>
          <div class="flex flex-wrap items-center gap-1">
            ${roleBadge}
            ${unionBadge}
          </div>
        </td>
        <td>
          ${s.phone ? `
            <div class="flex items-center gap-1.5 font-mono text-xs font-bold text-blue-600">
              <a href="tel:${s.phone}" class="hover:underline" title="Gọi điện cho phụ huynh">${s.phone}</a>
              <button onclick="copyToClipboard('${s.phone}', 'Đã sao chép SĐT phụ huynh!')" class="text-slate-400 hover:text-blue-600 text-[11px]" title="Sao chép SĐT">📋</button>
            </div>
          ` : '<span class="text-slate-300 italic text-xs">Chưa có</span>'}
        </td>
        <td class="text-slate-500 text-xs max-w-xs truncate" title="${s.note || ''}">${s.note || '-'}</td>
        <td class="text-center">
          <div class="inline-flex items-center gap-1.5">
            <button onclick="openEditStudentModal('${s.id}')" class="p-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold transition-all text-xs" title="Sửa thông tin học sinh">
              ✏️
            </button>
            <button onclick="deleteStudent('${s.id}')" class="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold transition-all text-xs" title="Xóa học sinh">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tableHtml += `
      </tbody>
    </table>
  `;

  container.innerHTML = tableHtml;
}

function handleStudentSearch(e) {
  studentSearchQuery = e.target.value.trim();
  renderStudentList();
}

function filterStudentByTeam(team, btnElement) {
  studentFilterTeam = team;
  document.querySelectorAll('.btn-filter-team').forEach(btn => {
    btn.classList.remove('active-team-filter', 'bg-blue-600', 'text-white', 'shadow-sm');
    btn.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-100', 'border', 'border-slate-200');
  });
  if (btnElement) {
    btnElement.classList.add('active-team-filter', 'bg-blue-600', 'text-white', 'shadow-sm');
    btnElement.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-100');
  }
  renderStudentList();
}

function filterStudentByGender(gender, btnElement) {
  studentFilterGender = gender;
  document.querySelectorAll('.btn-filter-gender').forEach(btn => {
    btn.classList.remove('active-gender-filter', 'bg-blue-600', 'text-white', 'shadow-sm');
    btn.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-100', 'border', 'border-slate-200');
  });
  if (btnElement) {
    btnElement.classList.add('active-gender-filter', 'bg-blue-600', 'text-white', 'shadow-sm');
    btnElement.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-100');
  }
  renderStudentList();
}

function resetStudentFilters() {
  studentSearchQuery = '';
  studentFilterTeam = 'all';
  studentFilterGender = 'all';
  const searchInput = document.getElementById('student-search-input');
  if (searchInput) searchInput.value = '';
  
  const allTeamBtn = document.querySelector('.btn-filter-team');
  if (allTeamBtn) filterStudentByTeam('all', allTeamBtn);

  const allGenderBtn = document.querySelector('.btn-filter-gender');
  if (allGenderBtn) filterStudentByGender('all', allGenderBtn);

  renderStudentList();
}

function openAddStudentModal() {
  const form = document.getElementById('form-student');
  if (form) form.reset();

  document.getElementById('student-id').value = '';
  document.getElementById('modal-student-title').textContent = 'Thêm Học Sinh Mới';

  // Tự động tính số thứ tự tiếp theo và mã HS
  const currentCount = (appState.students || []).length;
  const nextStt = currentCount + 1;
  document.getElementById('student-stt').value = nextStt;
  const padIndex = nextStt < 10 ? `0${nextStt}` : `${nextStt}`;
  document.getElementById('student-code').value = `HS10B${padIndex}`;
  document.getElementById('student-gender').value = 'Nam';
  document.getElementById('student-team').value = String(((nextStt - 1) % 4) + 1);
  document.getElementById('student-role').value = 'Học sinh';
  document.getElementById('student-union').checked = false;

  openModal('modal-student');
}

function openEditStudentModal(id) {
  const student = (appState.students || []).find(s => String(s.id) === String(id));
  if (!student) return;

  document.getElementById('student-id').value = student.id;
  document.getElementById('modal-student-title').textContent = `Sửa Hồ Sơ: ${student.name}`;
  document.getElementById('student-stt').value = student.stt || '';
  document.getElementById('student-code').value = student.code || '';
  document.getElementById('student-name').value = student.name || '';
  document.getElementById('student-gender').value = student.gender || 'Nam';
  document.getElementById('student-dob').value = student.dob || '';
  document.getElementById('student-team').value = student.team || '1';
  document.getElementById('student-role').value = student.role || 'Học sinh';
  document.getElementById('student-union').checked = !!student.isUnionMember;
  document.getElementById('student-phone').value = student.phone || '';
  document.getElementById('student-note').value = student.note || '';

  openModal('modal-student');
}

function handleStudentSubmit(e) {
  e.preventDefault();
  const id = document.getElementById('student-id').value;
  const name = document.getElementById('student-name').value.trim();
  if (!name) {
    showToast("Vui lòng nhập họ và tên học sinh!", "error");
    return;
  }

  const stt = parseInt(document.getElementById('student-stt').value) || ((appState.students || []).length + 1);
  const code = document.getElementById('student-code').value.trim() || `HS10B${stt < 10 ? '0' + stt : stt}`;
  const gender = document.getElementById('student-gender').value;
  const dob = document.getElementById('student-dob').value.trim();
  const team = parseInt(document.getElementById('student-team').value) || 1;
  const role = document.getElementById('student-role').value.trim() || 'Học sinh';
  const isUnionMember = document.getElementById('student-union').checked;
  const phone = document.getElementById('student-phone').value.trim();
  const note = document.getElementById('student-note').value.trim();

  if (!appState.students) appState.students = [];

  if (id) {
    // Cập nhật học sinh hiện có
    const index = appState.students.findIndex(s => String(s.id) === String(id));
    if (index !== -1) {
      appState.students[index] = {
        ...appState.students[index],
        stt,
        code,
        name,
        gender,
        dob,
        team,
        role,
        isUnionMember,
        phone,
        note
      };
      showToast(`Đã cập nhật học sinh ${name}!`, "success");
    }
  } else {
    // Thêm học sinh mới
    const newStudent = {
      id: 'hs_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      stt,
      code,
      name,
      gender,
      dob,
      team,
      role,
      isUnionMember,
      phone,
      note
    };
    appState.students.push(newStudent);
    showToast(`Đã thêm học sinh ${name} vào Lớp 10B!`, "success");
  }

  // Tự động đồng bộ sĩ số vào settings
  if (!appState.settings) appState.settings = {};
  appState.settings.classSize = appState.students.length;

  saveState();
  closeModal('modal-student');
}

function deleteStudent(id) {
  const student = (appState.students || []).find(s => String(s.id) === String(id));
  if (!student) return;

  if (confirm(`Thầy/Cô có chắc chắn muốn xóa học sinh "${student.name}" (Mã: ${student.code}) khỏi danh sách lớp không?`)) {
    appState.students = appState.students.filter(s => String(s.id) !== String(id));
    
    // Tự động cập nhật sĩ số
    if (!appState.settings) appState.settings = {};
    appState.settings.classSize = appState.students.length;

    saveState();
    showToast(`Đã xóa học sinh ${student.name}!`, "info");
  }
}

function clearAllStudents() {
  if (!appState.students || appState.students.length === 0) {
    showToast("Danh sách học sinh hiện đang trống!", "info");
    return;
  }

  if (confirm("Thầy/Cô có chắc chắn muốn XÓA TRẮNG toàn bộ danh sách học sinh Lớp 10B không? Thao tác này không thể hoàn tác!")) {
    appState.students = [];
    if (!appState.settings) appState.settings = {};
    appState.settings.classSize = 0;
    saveState();
    showToast("Đã xóa toàn bộ danh sách học sinh!", "info");
  }
}

function exportStudentsCSV() {
  const students = appState.students || [];
  if (students.length === 0) {
    showToast("Chưa có học sinh nào trong danh sách để xuất!", "info");
    return;
  }

  const sorted = students.slice().sort((a, b) => (Number(a.stt) || 999) - (Number(b.stt) || 999));

  let csvContent = "\uFEFF"; // UTF-8 BOM để Excel hiển thị tiếng Việt không bị lỗi font
  csvContent += "STT,Mã Học Sinh,Họ Và Tên,Giới Tính,Ngày Sinh,Tổ,Chức Vụ,Đoàn Viên,SĐT Phụ Huynh,Ghi Chú\n";

  sorted.forEach(s => {
    const row = [
      `"${s.stt || ''}"`,
      `"${s.code || ''}"`,
      `"${(s.name || '').replace(/"/g, '""')}"`,
      `"${s.gender || ''}"`,
      `"${s.dob || ''}"`,
      `"Tổ ${s.team || 1}"`,
      `"${(s.role || 'Học sinh').replace(/"/g, '""')}"`,
      `"${s.isUnionMember ? 'Đoàn viên' : ''}"`,
      `"${s.phone || ''}"`,
      `"${(s.note || '').replace(/"/g, '""')}"`
    ];
    csvContent += row.join(",") + "\n";
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `Danh_sach_lop_10B_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast("Đã xuất file Excel danh sách lớp 10B thành công!", "success");
}

function printStudentList() {
  switchTab('students-leadership');
  setTimeout(() => {
    window.print();
  }, 250);
}

function populateSampleStudents() {
  if (appState.students && appState.students.length > 0) {
    if (!confirm("Danh sách lớp hiện đã có học sinh. Thầy/Cô có muốn nạp lại danh sách 45 học sinh chính thức Lớp 10B - THPT Lai Vung 1 không?")) {
      return;
    }
  }

  appState.students = JSON.parse(JSON.stringify(OFFICIAL_STUDENTS_LIST));

  if (!appState.settings) appState.settings = {};
  appState.settings.schoolName = "Trường THPT Lai Vung 1";
  appState.settings.className = "Lớp 10B";
  appState.settings.teacherName = "Nguyễn Xuân Lan";
  appState.settings.classSize = 45;

  // Giữ trống Ban cán sự để người dùng tự bầu chọn và điền vào
  if (!appState.leadership) {
    appState.leadership = {
      monitor: "",
      secretary: "",
      viceAcademic: "",
      viceDiscipline: "",
      viceActivity: ""
    };
  }

  saveState();
  showToast("Đã nạp danh sách 45 học sinh Lớp 10B - THPT Lai Vung 1 thành công! Ban cán sự để trống để Thầy/Cô tự thiết lập.", "success");
}

function openEditLeadershipModal() {
  const lead = appState.leadership || {};
  document.getElementById('lead-monitor').value = lead.monitor || '';
  document.getElementById('lead-secretary').value = lead.secretary || '';
  document.getElementById('lead-academic').value = lead.viceAcademic || '';
  document.getElementById('lead-discipline').value = lead.viceDiscipline || '';
  document.getElementById('lead-activity').value = lead.viceActivity || '';
  openModal('modal-edit-leadership');
}

function handleEditLeadershipSubmit(e) {
  e.preventDefault();
  appState.leadership = {
    monitor: document.getElementById('lead-monitor').value.trim(),
    secretary: document.getElementById('lead-secretary').value.trim(),
    viceAcademic: document.getElementById('lead-academic').value.trim(),
    viceDiscipline: document.getElementById('lead-discipline').value.trim(),
    viceActivity: document.getElementById('lead-activity').value.trim()
  };
  saveState();
  closeModal('modal-edit-leadership');
  showToast("Đã cập nhật danh bạ Ban Cán Sự Lớp 10B!", "success");
}

// 9. Mốc sự kiện quan trọng trường THPT (Milestones Countdown)
function renderMilestones() {
  const container = document.getElementById('milestones-list');
  if (!container) return;

  const list = appState.milestones || [];
  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-6 px-4 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50 text-xs">
        <span class="font-bold text-slate-700">Chưa có mốc sự kiện nào được ghi (VD: Lễ 20/11, Hội trại 26/3, Họp PHHS...).</span>
        <button onclick="openModal('modal-add-milestone')" class="text-purple-600 font-extrabold hover:underline ml-1">+ Thêm sự kiện</button>
      </div>
    `;
    return;
  }

  const now = new Date();
  container.innerHTML = list.map(m => {
    const targetDate = new Date(m.date);
    const diffDays = Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24));
    
    let badge = '';
    if (diffDays < 0) {
      badge = `<span class="px-2.5 py-0.5 rounded-full text-[11px] bg-slate-100 text-slate-500 font-bold">Đã diễn ra</span>`;
    } else if (diffDays === 0) {
      badge = `<span class="px-2.5 py-0.5 rounded-full text-[11px] bg-rose-100 text-rose-700 font-black animate-pulse">HÔM NAY!</span>`;
    } else {
      badge = `<span class="px-2.5 py-0.5 rounded-full text-[11px] bg-blue-100 text-blue-800 font-extrabold">Còn ${diffDays} ngày</span>`;
    }

    return `
      <div class="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 transition-all flex items-center justify-between gap-3 shadow-sm">
        <div class="flex items-center gap-2.5">
          <span class="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0 border border-purple-200">
            🎯
          </span>
          <div>
            <h5 class="font-black text-slate-900 text-xs sm:text-sm">${m.title}</h5>
            <p class="text-[11px] text-slate-500 font-medium">📅 ${m.date.split('-').reverse().join('/')} • ${m.note || 'Sự kiện toàn trường'}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          ${badge}
          <button onclick="deleteMilestone(${m.id})" class="text-rose-500 hover:text-rose-700 text-xs font-bold p-1">🗑️</button>
        </div>
      </div>
    `;
  }).join('');
}

function handleAddMilestoneSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('milestone-title').value.trim();
  const date = document.getElementById('milestone-date').value;
  const note = document.getElementById('milestone-note').value.trim();

  if (!title || !date) {
    showToast("Vui lòng nhập tên sự kiện và ngày diễn ra!", "warning");
    return;
  }

  if (!appState.milestones) appState.milestones = [];
  appState.milestones.push({ id: Date.now(), title, date, note });
  appState.milestones.sort((a, b) => new Date(a.date) - new Date(b.date));

  saveState();
  closeModal('modal-add-milestone');
  document.getElementById('form-add-milestone').reset();
  showToast("Đã thêm mốc sự kiện mới!", "success");
}

function deleteMilestone(id) {
  if (confirm("Xóa sự kiện này?")) {
    appState.milestones = appState.milestones.filter(m => m.id !== id);
    saveState();
    showToast("Đã xóa sự kiện!", "info");
  }
}

// Render toàn bộ
function renderAll() {
  applyDarkModeUI();
  renderHeaderAndStats();
  renderUrgentNotices();
  renderTimetable(currentTimetableDay);
  renderExamSchedule();
  renderResources();
  renderDutyTasks();
  renderGreenChecklist();
  renderDutyLogs();
  renderHallOfFame();
  renderLeadership();
  renderStudentList();
  renderMilestones();
  populateNominationDatalist();
  if (window.lucide) lucide.createIcons();
}

function populateNominationDatalist() {
  const datalist = document.getElementById('nom-name-suggestions');
  if (!datalist) return;
  const groups = ['Tổ 1 - Lớp 10B', 'Tổ 2 - Lớp 10B', 'Tổ 3 - Lớp 10B', 'Tổ 4 - Lớp 10B'];
  const studentNames = (appState.students || []).map(s => s.name);
  datalist.innerHTML = [...groups, ...studentNames].map(name => `<option value="${name}"></option>`).join('');
}

// ==========================================
// CÁC THAO TÁC CRUD FORM
// ==========================================

// 1. Thông báo khẩn
function handleAddNoticeSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('notice-title').value.trim();
  const level = document.getElementById('notice-level').value;
  const sender = document.getElementById('notice-sender').value.trim() || 'Ban Giám Hiệu & Đoàn Trường';
  const content = document.getElementById('notice-content').value.trim();
  const isActive = document.getElementById('notice-is-active').checked;

  if (!title || !content) {
    showToast("Vui lòng điền tiêu đề và nội dung thông báo!", "warning");
    return;
  }

  appState.urgentNotices.unshift({
    id: Date.now(),
    title,
    level,
    sender,
    content,
    date: new Date().toLocaleDateString('vi-VN'),
    isActive
  });

  saveState();
  closeModal('modal-add-notice');
  document.getElementById('form-add-notice').reset();
  showToast("Đã lưu thông báo mới thành công!", "success");
}

function toggleNoticeStatus(id) {
  appState.urgentNotices = appState.urgentNotices.map(n => {
    if (n.id === id) return { ...n, isActive: !n.isActive };
    return n;
  });
  saveState();
  showToast("Đã cập nhật trạng thái hiển thị thông báo!", "info");
}

function deleteNotice(id) {
  if (confirm("Xóa thông báo này khỏi hệ thống?")) {
    appState.urgentNotices = appState.urgentNotices.filter(n => n.id !== id);
    saveState();
    showToast("Đã xóa thông báo!", "info");
  }
}

// 2. Thời khóa biểu
function openAddPeriodModal(day) {
  document.getElementById('period-day').value = day;
  openModal('modal-add-period');
}

function handleAddPeriodSubmit(e) {
  e.preventDefault();
  const day = parseInt(document.getElementById('period-day').value);
  const period = parseInt(document.getElementById('period-num').value);
  const time = document.getElementById('period-time').value.trim() || "07:15 - 08:00";
  const subject = document.getElementById('period-subject').value.trim();
  const teacher = document.getElementById('period-teacher') ? document.getElementById('period-teacher').value.trim() : "";
  const room = document.getElementById('period-room') ? document.getElementById('period-room').value.trim() : "";
  const note = document.getElementById('period-note').value.trim() || "Học bình thường";
  const type = document.getElementById('period-type').value;

  if (!subject) {
    showToast("Vui lòng chọn hoặc nhập tên môn học!", "warning");
    return;
  }

  if (!appState.timetable[day]) appState.timetable[day] = [];

  appState.timetable[day].push({ id: Date.now(), period, time, subject, teacher, room, note, type });
  appState.timetable[day].sort((a, b) => a.period - b.period);

  saveState();
  closeModal('modal-add-period');
  document.getElementById('form-add-period').reset();
  showToast(`Đã thêm Tiết ${period} cho Thứ ${day}!`, "success");
}

function deletePeriod(day, id) {
  if (confirm("Xóa tiết học này khỏi Thời khóa biểu?")) {
    appState.timetable[day] = appState.timetable[day].filter(p => p.id !== id);
    saveState();
    showToast("Đã xóa tiết học!", "info");
  }
}

// 3. Lịch thi
function handleAddExamSubmit(e) {
  e.preventDefault();
  const subject = document.getElementById('exam-subject').value.trim();
  const date = document.getElementById('exam-date').value;
  const format = document.getElementById('exam-format').value.trim() || "Trắc nghiệm";
  const duration = document.getElementById('exam-duration').value.trim() || "45 phút";
  const scope = document.getElementById('exam-scope').value.trim() || "Theo đề cương ôn thi";

  if (!subject || !date) {
    showToast("Vui lòng nhập môn thi và ngày kiểm tra!", "warning");
    return;
  }

  appState.examSchedule.push({ id: Date.now(), subject, date, format, duration, scope });
  appState.examSchedule.sort((a, b) => new Date(a.date) - new Date(b.date));

  saveState();
  closeModal('modal-add-exam');
  document.getElementById('form-add-exam').reset();
  showToast("Đã lên lịch kiểm tra thành công!", "success");
}

function deleteExam(id) {
  if (confirm("Xóa lịch kiểm tra môn này?")) {
    appState.examSchedule = appState.examSchedule.filter(e => e.id !== id);
    saveState();
    showToast("Đã xóa lịch kiểm tra!", "info");
  }
}

// 4. Tài liệu Drive
function handleAddResourceSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('res-title').value.trim();
  const subject = document.getElementById('res-subject').value;
  const type = document.getElementById('res-type').value;
  const driveUrl = document.getElementById('res-url').value.trim();
  const uploader = document.getElementById('res-uploader').value.trim() || 'Giáo viên bộ môn';

  if (!title || !driveUrl) {
    showToast("Vui lòng nhập tên tài liệu và link Google Drive!", "warning");
    return;
  }

  appState.resources.unshift({
    id: Date.now(),
    title,
    subject,
    type,
    updated: new Date().toLocaleDateString('vi-VN'),
    uploader,
    driveUrl
  });

  saveState();
  closeModal('modal-add-resource');
  document.getElementById('form-add-resource').reset();
  showToast("Đã thêm tài liệu mới vào Kho tài nguyên!", "success");
}

function deleteResource(id) {
  if (confirm("Xóa tài liệu này khỏi kho?")) {
    appState.resources = appState.resources.filter(r => r.id !== id);
    saveState();
    showToast("Đã xóa tài liệu!", "info");
  }
}

// 5. Phân công trực nhật
function openDutyEditModal() {
  const r = appState.dutyRoster;
  document.getElementById('duty-edit-week').value = r.currentWeek;
  document.getElementById('duty-edit-team').value = r.currentTeam;
  document.getElementById('duty-edit-leader').value = r.teamLeader || '';
  
  document.getElementById('duty-task-1').value = r.tasks[0]?.assigned || '';
  document.getElementById('duty-task-2').value = r.tasks[1]?.assigned || '';
  document.getElementById('duty-task-3').value = r.tasks[2]?.assigned || '';
  document.getElementById('duty-task-4').value = r.tasks[3]?.assigned || '';
  document.getElementById('duty-task-5').value = r.tasks[4]?.assigned || '';
  
  openModal('modal-edit-duty');
}

function handleDutyEditSubmit(e) {
  e.preventDefault();
  appState.dutyRoster.currentWeek = parseInt(document.getElementById('duty-edit-week').value) || 1;
  appState.dutyRoster.currentTeam = parseInt(document.getElementById('duty-edit-team').value) || 1;
  appState.dutyRoster.teamLeader = document.getElementById('duty-edit-leader').value.trim() || '';

  appState.dutyRoster.tasks[0].assigned = document.getElementById('duty-task-1').value.trim();
  appState.dutyRoster.tasks[1].assigned = document.getElementById('duty-task-2').value.trim();
  appState.dutyRoster.tasks[2].assigned = document.getElementById('duty-task-3').value.trim();
  appState.dutyRoster.tasks[3].assigned = document.getElementById('duty-task-4').value.trim();
  appState.dutyRoster.tasks[4].assigned = document.getElementById('duty-task-5').value.trim();

  saveState();
  closeModal('modal-edit-duty');
  showToast("Đã cập nhật phân công trực nhật tuần này!", "success");
}

function submitDutyLog(e) {
  e.preventDefault();
  const writer = document.getElementById('duty-writer').value.trim() || 'Lớp phó Lao động';
  const score = document.getElementById('duty-score').value.trim() || '10/10';
  const note = document.getElementById('duty-note').value.trim();

  if (!note) {
    showToast("Vui lòng ghi nhận xét buổi trực nhật!", "warning");
    return;
  }

  appState.dutyLogs.unshift({
    date: new Date().toLocaleDateString('vi-VN'),
    writer,
    score,
    note
  });
  saveState();
  document.getElementById('duty-note').value = '';
  showToast("Đã lưu nhật ký trực nhật!", "success");
}

// 6. Vinh danh gương sáng
function handleAddNominationSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('nom-name').value.trim();
  const title = document.getElementById('nom-title').value.trim();
  const category = document.getElementById('nom-category').value;
  const avatar = document.getElementById('nom-avatar').value.trim() || '🌟';
  const achievement = document.getElementById('nom-achievement').value.trim();
  const weekVal = document.getElementById('nom-week') ? document.getElementById('nom-week').value.trim() : '';

  if (!name || !title || !achievement) {
    showToast("Vui lòng điền đầy đủ thông tin vinh danh!", "warning");
    return;
  }

  const badges = {
    academic: "🥇 Hoa Điểm Mười",
    improvement: "🚀 Tiến Bộ Vượt Bậc",
    kindness: "❤️ Việc Tốt Tử Tế",
    group: "🏆 Tổ Xuất Sắc Tuần"
  };

  if (!appState.hallOfFame) appState.hallOfFame = [];

  appState.hallOfFame.unshift({
    id: Date.now(),
    name,
    title,
    category,
    badge: badges[category] || "⭐ Vinh danh tuần",
    avatar,
    achievement,
    hearts: 1,
    date: weekVal || `Tuần ${appState.dutyRoster.currentWeek || 12}`
  });

  saveState();
  closeModal('modal-nominate');
  triggerConfetti();
  document.getElementById('form-nominate').reset();
  showToast("Đã thêm gương sáng vinh danh tuần này!", "success");
}

function cheerMember(id) {
  appState.hallOfFame = appState.hallOfFame.map(item => {
    if (item.id === id) return { ...item, hearts: (item.hearts || 0) + 1 };
    return item;
  });
  saveState();
  triggerConfetti();
  showToast("Đã gửi lời khen & chúc mừng!", "success");
}

function deleteHallOfFame(id) {
  if (confirm("Xóa gương mặt này khỏi danh sách vinh danh tuần?")) {
    appState.hallOfFame = appState.hallOfFame.filter(h => h.id !== id);
    saveState();
    showToast("Đã xóa vinh danh!", "info");
  }
}

// 7. Cài đặt thông tin Trường & Lớp
function openClassSettingsModal() {
  const s = appState.settings || {};
  document.getElementById('set-school-name').value = s.schoolName || '';
  document.getElementById('set-class-name').value = s.className || 'Lớp 10B';
  document.getElementById('set-teacher-name').value = s.teacherName || '';
  document.getElementById('set-school-year').value = s.schoolYear || '2026 - 2027';
  document.getElementById('set-class-size').value = s.classSize || '';
  document.getElementById('set-weekly-score').value = s.weeklyScore || '';
  document.getElementById('set-weekly-rank').value = s.weeklyRank || '';
  document.getElementById('set-drive-url').value = s.driveMainUrl || '';
  document.getElementById('set-zalo-url').value = s.zaloGroupUrl || '';
  openModal('modal-class-settings');
}

function handleClassSettingsSubmit(e) {
  e.preventDefault();
  appState.settings = {
    ...appState.settings,
    schoolName: document.getElementById('set-school-name').value.trim() || 'Trường THPT',
    className: document.getElementById('set-class-name').value.trim() || 'Lớp 10B',
    teacherName: document.getElementById('set-teacher-name').value.trim(),
    schoolYear: document.getElementById('set-school-year').value.trim() || '2026 - 2027',
    classSize: document.getElementById('set-class-size').value.trim(),
    weeklyScore: document.getElementById('set-weekly-score').value.trim(),
    weeklyRank: document.getElementById('set-weekly-rank').value.trim(),
    driveMainUrl: document.getElementById('set-drive-url').value.trim(),
    zaloGroupUrl: document.getElementById('set-zalo-url').value.trim()
  };

  saveState();
  closeModal('modal-class-settings');
  showToast("Đã lưu thông tin cài đặt lớp học!", "success");
}

// Tiện ích lọc & copy
function filterResourceSubject(subj, btnElement) {
  resourceFilterSubject = subj;
  document.querySelectorAll('.resource-filter-btn').forEach(b => {
    b.classList.remove('bg-blue-600', 'text-white');
    b.classList.add('bg-slate-100', 'text-slate-600');
  });
  if (btnElement) {
    btnElement.classList.add('bg-blue-600', 'text-white');
    btnElement.classList.remove('bg-slate-100', 'text-slate-600');
  }
  renderResources();
}

function handleResourceSearch(e) {
  resourceSearchQuery = e.target.value;
  renderResources();
}

function copyLink(url) {
  if (!url) {
    showToast("Chưa có liên kết!", "warning");
    return;
  }
  navigator.clipboard.writeText(url).then(() => {
    showToast("Đã sao chép liên kết vào bộ nhớ tạm!", "success");
  }).catch(() => {
    showToast("Liên kết: " + url, "info");
  });
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    if (id === 'modal-nominate') {
      populateNominationDatalist();
    }
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  const icons = { success: '🎉', warning: '⚠️', info: '💡' };
  toast.innerHTML = `<span>${icons[type] || '💡'}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function triggerConfetti() {
  if (window.confetti) {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  }
}

// Khởi chạy khi tải xong
document.addEventListener('DOMContentLoaded', () => {
  startClock();
  renderAll();
});
