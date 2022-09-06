<?php
if ($_GET['randomId'] != "my886Q1dxpyXU5Tz_XIOuvJfwR8Pysn8CEZkyP204oxcSnQiB96QWCrhXy8TROVO") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
