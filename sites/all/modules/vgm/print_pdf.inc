<?php
use setasign\Fpdi\Fpdi;
// use setasign\Fpdi\Tcpdf\Fpdi;
use setasign\Fpdi\PdfReader;


function print_pdf($vgm_id){
  libraries_load('fpdf');
  // libraries_load('fpdi');

  $vgm_node = node_load($vgm_id);

  // drupal_set_message("<pre>".print_r($vgm_node,TRUE)."</pre>");

  // var_dump($vgm_node);
  // $vgm_node->uid // Vettore user id che ha inviato il vgm
  $bookingNumber = $vgm_node->vgm_booking_n['und'][0]['value'];
  $sealNumber = $vgm_node->vgm_seal_n['und'][0]['value'];
  $containerNumber = $vgm_node->vgm_container_n['und'][0]['value'];

  $shipper_node = node_load($vgm_node->vgm_shipper_ref['und'][0]['nid']);
  // drupal_set_message("<pre>".print_r($shipper_node,TRUE)."</pre>");

  $weight = $vgm_node->vgm_weight['und'][0]['value'];
  $weightOption = $vgm_node->vgm_weight_method['und'][0]['value'];
  $weightMethod = list_allowed_values(field_info_field('vgm_weight_method'))[$weightOption];

  $auth_people_node = node_load($vgm_node->vgm_authpeople_ref['und'][0]['nid']);

  $date = date('d/m/Y H:i');

  // $pdf = new FPDF();
  $pdf = new Fpdi();
  $pdf->AddPage();

  $width = $pdf->GetPageWidth();  // Width of Current Page
  $height = $pdf->GetPageHeight(); // Height of Current Page

  $pdf->SetFont('Arial','',10);

  // date
  $pdf->Cell(0, 10, $date, 0, 2, 'R');
  // Mittente
  $pdf->Cell(0, 10, 'MITTENTE:', 1, 2);
  $pdf->Cell(0, 10, 'Nome:'.$shipper_node->title, 1, 2);
  $pdf->Cell(0, 10, 'Indirizzo:'.$shipper_node->vgm_address['und'][0]['value'], 1, 2);
  $pdf->Cell(0, 10, 'Numero:'.$shipper_node->vgm_address_number['und'][0]['value'], 1, 2);
  $pdf->Cell(0, 10, 'C.A.P.:'.$shipper_node->vgm_zip_code['und'][0]['value'], 1, 2);
  $pdf->Cell(0, 10, 'Provincia:'.$shipper_node->vgm_address_province['und'][0]['value'], 1, 2);
  $cityKey = $shipper_node->vgm_address_city['und'][0]['value'];
  $city = list_allowed_values(field_info_field('vgm_address_city'))[$cityKey];
  // https://stackoverflow.com/questions/3514076/special-characters-in-fpdf-with-php
  $pdf->Cell(0, 10, 'Citt\%E0:'.$city, 1, 2);

  $pdf->Cell(0, 10, 'Telefono:'.$shipper_node->vgm_phone['und'][0]['value'], 1, 2);
  $pdf->Cell(0, 10, 'email:'.$shipper_node->vgm_e_mail['und'][0]['value'], 1, 2);

  // Responsabile vgm
  $pdf->Cell(0, 10, 'Responsabile vgm:', 0, 2);
  $pdf->Cell(0, 10, 'Nome:'.$auth_people_node->title, 0, 2);
  $pdf->Cell(0, 10, 'Cognome:'.$auth_people_node->vgm_surname['und'][0]['value'], 0, 2);
  $pdf->Cell(0, 10, 'Telefono:'.$auth_people_node->vgm_phone['und'][0]['value'], 0, 2);
  $pdf->Cell(0, 10, 'email:'.$auth_people_node->vgm_e_mail['und'][0]['value'], 0, 2);

  // bookingNumber sealNumber containerNumber
  $pdf->Cell($width/3, 10, 'Booking number:'.$bookingNumber, 0);
  $pdf->Cell($width/3, 10, 'Seal number:'.$sealNumber, 0);
  $pdf->Cell($width/3, 10, 'Container number:'.$containerNumber, 0);

  $pdf->Ln();
  // Metodo pesatura
  $pdf->Cell(0, 10, 'Metodo pesatura:'.$weightMethod, 0, 2);

  // Peso
  $pdf->Cell(0, 10, 'Massa lorda certificata VGM:'.$weight.' kg', 0, 2);

  // Testo normativa
  $pdf->Cell(0, 10, 'Il sottoscritto certificache i suddetti dati sono veri e corretti in ottempreanza alle previsioni della regola VI/2 dell Convenzione Internazionale per la Salvaguardia della Vita Umana in mare (SOLAS), come emendata dalla Risoluzione MSC 380(94) e delle discendenti disposizioni nazionali.', 0, 2);

  // Timbro e firma
  // $pdf->Cell(0, 10, 'Nome:'.$shipper_node->title, 1, 2);

  // $logo = 'logo.jpg';
  // $mailIcon = 'mail_icon.png';
  // // Size of the logo
  // $size = getimagesize('./'.$machine.'/'.$logo);//list($width, $height, $type, $attr)
  // $logowidth = ($size[0]/$size[1])*20; // Set the width from the proportion of with and height
  // $logoheight = ($size[1]/$size[0])*$logowidth;
  //
  // $pdf->Image('./'.$machine.'/'.$logo,8*$bootU,40, null, $logoheight);

  $pdf->Output();



}
