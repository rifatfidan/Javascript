<?php 



$not=$_POST['not'];

if ($not <=44) {
	
	echo "Başarısız Öğrenci";

} else if ($not>=45 && $not <54) {
	
	echo "Geçer bu çocuk";

} else if ($not>54 && $not <69) {
	
	echo "Ortalama bu çocuk";

} else if ($not>69 && $not <85) {
	
	echo "İyi bu çocuk";

} else if ($not>85 && $not <=100) {
	
	echo "Süper bu çocuk";

} else if ($not>100) {
	
	echo "Yok böyle bir not çocuk";
}

 ?>
