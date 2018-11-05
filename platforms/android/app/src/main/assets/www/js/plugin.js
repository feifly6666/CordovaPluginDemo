 $(function(){
 //Scan Enable
    $('input[name="radScan"]').change(
        function(){
        var para = ["EXTRA_SCAN_POWER",$(this).val()];
	    nlscan.plugins.barcodescanner.scanSetting(para);
    }
  );

  // Trig Mode
  $('#trigMode').change(
        function(){
        var para = ["EXTRA_TRIG_MODE",$(this).val()];
  	    nlscan.plugins.barcodescanner.scanSetting(para);
      }
    );

  // Notice Sound
    $('input[name="radNotice"]').change(
                function(){
                var para = ["EXTRA_SCAN_NOTY_SND",$(this).val()];
        	    nlscan.plugins.barcodescanner.scanSetting(para);
            }
          );
 });