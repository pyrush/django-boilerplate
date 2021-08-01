// // Select all check boxes on dataset_detail page for augmentation
// $(document).ready(function () {
//     $('#selectAllAugment').change(function (e) {
//         if (e.currentTarget.checked) {
//             $('.selected').find('input[type="checkbox"]').prop('checked', true);
//             $('#generateBtn').removeClass('disabled');
//         }
//         else {
//             $('.selected').find("input[type='checkbox']").prop('checked', false);
//             $('#generateBtn').addClass("disabled");
//         }
//     });

//     $(document).on('click', '[data-toggle="lightbox"]', function (event) {
//         event.preventDefault();
//         $(this).ekkoLightbox();
//     });

//     // Select all check boxes on classes page
//     $('#selectAllClasses').change(function (e) {
//         if (e.currentTarget.checked) {
//             $('.selectCB').find('input[type="checkbox"]').prop('checked', true);
//         }
//         else {
//             $('.selectCB').find("input[type='checkbox']").prop('checked', false);
//         }
//     });

//     // Generate button enable disable on dataset detail page
//     $('.selected').find("input[type='checkbox']").change(function (e) {
//         if (e.target.checked) {
//             $('#generateBtn').removeClass('disabled');
//         } else {
//             $('#generateBtn').addClass("disabled");
//         }
//     });
//     // Generate button enable on selecting 'All Random Apply'
//     $('#all').change(function (e) {
//         if (e.currentTarget.checked) {
//             $('#generateBtn').removeClass("disabled");
//         } else {
//             $('#generateBtn').addClass("disabled");
//         }
//     });
//     $('#createBtn').clicked(function () {
//         $('#uploadBtn').removeClass("disabled");
//     });

//     function show_value(x) {
//         document.getElementById("slider_value").innerText = x;
//     };

//     $("#closeBtn").click(function () {
//         $("#msgBox").hide();
//     });
// });
Dropzone.autoDiscover = false;
var myDropzone = new Dropzone("#cocoToYolo", {
    url: '/convert_formats/coco_to_yolo/',
    method: "post",
    // withCredentials: false,
    // parallelUploads: 12,
    uploadMultiple: false,
    maxFilesize: 256 * 4 * 2,
    paramName: "file",
    createImageThumbnails: true,
    maxThumbnailFilesize: 20,
    thumbnailWidth: 100,
    thumbnailHeight: 100,
    maxFiles: 12,
    // params: {},
    clickable: true,
    ignoreHiddenFiles: true,
    acceptedFiles: ".json",
    autoProcessQueue: false,
    addRemoveLinks: true,
    previewsContainer: "#preview",
    dictDefaultMessage: "Drop files here to upload",
    dictFallbackMessage: "Your browser does not support drag and drop file uploads.",
    dictFallbackText: "Please use the fallback form below to upload your files.",
    dictFileTooBig: "File is too big ({{filesize}}MB). Max filesize: {{maxFilesize}}MB.",
    dictInvalidFileType: "You can't upload files of this type.",
    dictResponseError: "Server responded with {{statusCode}} code.",
    dictCancelUpload: "Cancel upload",
    dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
    dictRemoveFile: "Remove",
    dictRemoveFileConfirmation: null,
    dictMaxFilesExceeded: "You can only upload {{maxFiles}} files.",


});


