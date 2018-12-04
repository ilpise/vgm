<h1>EDIT</h1>

<div class="row">
	<div class="col-md-12">
		<?php
			print render($form['vgm_weight']);
			print render($form['vgm_shipper_ref']);
			print render($form['vgm_booking_n']);
      print render($form['vgm_seal_n']);
      print render($form['vgm_container_n']);
		?>
	</div>
</div>
<?php print drupal_render_children($form) ?>
