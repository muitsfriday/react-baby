<?php $app = include '/webroot/ddfw/system2/bootstrap.php';
use ddfw2\services\member\Member;

$loginUrl = 'https://myback2.dek-d.com/dek-d/my.id_station/login.php';
$referUrl = $app->request->getUrl().$app->request->getPath();
if(substr($referUrl, -1) == '/') {
    $referUrl = substr($referUrl, 0, -1);
}

if(!Member::me()->isExist()){
	$app->response->redirect($loginUrl.'?refer='.$referUrl);
}else{
	if(!Member::me()->isGod()){
		$app->response->redirect($app->request->getUrl());
	}else{
		header('Content-Type: text/html; charset=utf-8');
		include 'index.html';
	}
}
// ;
