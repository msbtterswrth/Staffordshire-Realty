<?php

namespace Drupal\ckeditor_div_manager\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "div" plugin.
 *
 * @CKEditorPlugin(
 *   id = "div",
 *   label = @Translation("Div Container Manager")
 * )
 */
class CKEditorDiv extends CKEditorPluginBase {

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return 'libraries/div/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return [
      'CreateDiv' => [
        'label' => t('Div Container Manager'),
        'image' => 'libraries/div/icons/creatediv.png',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

}
