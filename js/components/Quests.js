
import html from '../html.js';

const flags = ["is_completed", "is_requirement_completed", "is_received",
"unk3", "unk4", "unk5", "unk6", "consumed_scroll", "unk8", "unk9", "unk10",
"unk11", "closed", "done_recently", "unk14", "unk15"]

const quests = [
  {
    key: "act_i", label: "Act I",
    quests: [
      { key: "den_of_evil", label: "Den Of Evil", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "sisters_burial_grounds", label: "Sisters' Burial Grounds", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "the_search_for_cain", label: "Search for Cain", values: [{ key: "unk10", label: "Cow King Killed" }, { key: "is_completed", label: "Completed" }] },
      { key: "the_forgotten_tower", label: "The Forgotten Tower", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "tools_of_the_trade", label: "Tools of the Trade", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "sisters_to_the_slaughter", label: "Sisters to the Slaughter", values: [{ key: "is_completed", label: "Completed" }] },
    ]
  },
  {
    key: "act_ii", label: "Act II",
    quests: [
      { key: "radaments_lair", label: "Radament's Lair", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "the_horadric_staff", label: "The Horadric Staff", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "tainted_sun", label: "Tainted Sun", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "arcane_sanctuary", label: "Arcane Sanctuary", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "the_summoner", label: "The Summoner", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "the_seven_tombs", label: "The Seven Tombs", values: [{ key: "is_completed", label: "Completed" }] },
    ]
  },
  {
    key: "act_iii", label: "Act III",
    quests: [
      { key: "the_golden_bird", label: "The Golden Bird", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "blade_of_the_old_religion", label: "Blade of the Old Religion", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "khalims_will", label: "Khalim's Will", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "lam_esens_tome", label: "Lam Esen's Tome", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "the_blackened_temple", label: "The Blackened Temple", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "the_guardian", label: "The Guardian", values: [{ key: "is_completed", label: "Completed" }] },
    ]
  },
  {
    key: "act_iv", label: "Act IV",
    quests: [
      { key: "the_fallen_angel", label: "Fallen Angel", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "hellforge", label: "Hell's Forge", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "terrors_end", label: "Terror's End", values: [{ key: "is_completed", label: "Completed" }] },
    ]
  },
  {
    key: "act_v", label: "Act V",
    quests: [
      { key: "siege_on_harrogath", label: "Siege on Harrogath", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "rescue_on_mount_arreat", label: "Rescue on Mount Arreat", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "prison_of_ice", label: "Prison of Ice", values: [{ key: "consumed_scroll ", label: "Consumed Scroll" }, { key: "is_completed", label: "Completed" }] },
      { key: "betrayal_of_harrogath", label: "Betrayal of Harrogath", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "rite_of_passage", label: "Rite of Passage", values: [{ key: "is_completed", label: "Completed" }] },
      { key: "eve_of_destruction", label: "Eve of Destruction", values: [{ key: "is_completed", label: "Completed" }] },
    ]
  },
];

export default {
  template: html`
<div class="form-row">
  <div class="col-md-4" v-for="difficulty in difficulties">
    <ul>
      <li><label>{{ difficulty.label }}</label></li>
      <ul v-for="act in difficulty.acts">
        <li><label>{{ act.label }}</label></li>
        <ul v-for="quest in act.quests">
          <li><button  type="button" class="btn btn-link" title="Reset Quest" @click="reset(difficulty, act, quest)"><i class="fa fa-undo"></i></button><label>{{ quest.label }}</label></li>
          <ul>
            <li v-for="state in quest.values"><label><input class="form-check-input" type="checkbox" v-model="save.header[difficulty.key][act.key][quest.key][state.key]">{{ state.label }}</label></li>
          </ul>
        </ul>
      </ul>
    </ul>
  </div>
</div>
`,
  props: {
    save: Object,
  },
  data() {
    return {
      difficulties: [
        { key: 'quests_normal', label: "Normal", acts: JSON.parse(JSON.stringify(quests)) }, 
        { key: 'quests_nm', label: "Nightmare", acts: JSON.parse(JSON.stringify(quests)) }, 
        { key: 'quests_hell', label: "Hell", acts: JSON.parse(JSON.stringify(quests)) }
      ],
    };
  },
  methods: {
    reset(difficulty, act, quest) {
      for(const flag of flags) {
        this.save.header[difficulty.key][act.key][quest.key][flag] = false;
      }
    }
  }
};