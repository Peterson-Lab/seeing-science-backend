export interface jsPsychOptions {
  timeline: any[]
  display_element: Element | null
  on_finish?: (data: any) => void
  on_trial_start?: (trial: any) => void
  on_trial_finish?: () => void
  on_data_update?: (data: any) => void
  on_interaction_data_update?: (data: any) => void
  on_close?: (data: any) => void
  preload_images?: any[]
  preload_audio?: any[]
  preload_video?: any[]
  use_webaudio?: boolean
  exclusions?: Record<string, unknown>
  show_progress_bar?: boolean
  message_progress_bar?: string
  auto_update_progress_bar?: boolean
  auto_preload?: boolean
  show_preload_progress_bar?: boolean
  max_load_time?: number | 60000
  max_preload_attempts?: number | 10
  default_iti?: number | 0
  minimum_valid_rt?: number | 0
  experiment_width?: number | null
  override_safe_mode?: boolean
}
